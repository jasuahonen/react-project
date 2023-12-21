//  Testing an API endpoint using the supertest
const request = require('supertest'); // Import the 'supertest' library for making HTTP requests
const app = require('../src/app'); // Import your Express app

// Describe a test suite for the GET /api/cuisines endpoint
describe('The GET /api/shoppingList endpoint', () => {
  // Get-Test 1: It should return a list of shopping list in JSON format
  it('should return a shopping list in JSON format', async () => {
    const response = await request(app).get('/api/shoppingList'); // Make an HTTP GET request to the /api/cuisines endpoint
    expect(response.statusCode).toBe(200); // Verify that the HTTP response status code is 200 (OK)
    expect(response.body).toEqual([ // Verify that the response body matches an expected JSON array
      {
        id: 1,
        item: 'item-1',
      },
      {
        id: 2,
        item: 'item-2',
      },
      {
        id: 3,
        item: 'item-3',
      },

    ]);
  });

  // GET-Test 2: It should return 1 shopping list when a valid id param is present
  it('should return 1 shopping list when an valid id param is present', async () => {
    const response = await request(app).get('/api/shoppingList/2'); // Make an HTTP GET request to the /api/shoppingList/2 endpoint
    expect(response.statusCode).toBe(200); // Verify that the HTTP response status code is 200 (OK)
    expect(response.body).toEqual( // Verify that the response body matches an expected JSON object

      {
        id: 2,
        item: 'item-2',
      },
    );
  });

  // GET-Test 3:It should return 404 and error message when no shoppinglist with given id were found
  it('should return 404 when no any shopping list with the id was found', async () => {
    const response = await request(app).get('/api/shoppingList/10'); // Make an HTTP GET request to the /api/cuisines/10 endpoint (an ID that doesn't exist)
    expect(response.statusCode).toBe(404); // Verify that the HTTP response status code is 404
    expect(response.text).toContain('Shopping List Page Not Found');
    // Check if the error message contains the specific error text
  });
});

// Describe a test suite for the POST /api/shoppingList endpoint
// POST-Test Case 1: Successful Creation of a New item
describe('The POST /api/shoppingList endpoint', () => {
  it('should create a new item in JSON format', async () => {
    const mynewitem = {
      item: 'pineapple',
    };

    const response = await request(app)
      .post('/api/shoppingList')
      .set('Content-Type', 'application/json')
      .send(mynewitem);
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBeTruthy();
    expect(response.body.item).toEqual(mynewitem.item);
  });

  // POST-Test Case 2: Missing Required Fields in the Request (id)
  it('should return a 400 error when required fields are missing', async () => {
    const incompletelist = {
      id: '2',
    };

    const response = await request(app)
      .post('/api/shoppingList')
      .set('Content-Type', 'application/json')
      .send(incompletelist);

    expect(response.statusCode).toBe(400); // Verify that the HTTP response status code is 400
    expect(response.text).toEqual('"item" is required');
    // Check if the response contains the expected error message for the missing field
  });

  // POST-Test Case 3: Missing Required Fields in the Request (item)
  it('should return a 400 error when required fields are missing-item', async () => {
    const incompletelist = {
      id: 1,
    };

    const response = await request(app)
      .post('/api/shoppingList')
      .set('Content-Type', 'application/json')
      .send(incompletelist);

    expect(response.statusCode).toBe(400); // Verify that the HTTP response status code is 400
    expect(response.text).toEqual('"item" is required');
    // Check if the response contains the expected error message for the missing field
  });

  // POST-Test Case : not allow too short item and should be at least 3 lettered
  it('should not allow too short item and should be at least 3 lettered ', async () => {
    const shortitem = {
      id: 1,
      item: 'it',
    };

    const response = await request(app)
      .post('/api/shoppingList')
      .set('Content-Type', 'application/json')
      .send(shortitem);

    expect(response.statusCode).toBe(400); // Verify that the HTTP respo
    expect(response.text).toEqual('"item" length must be at least 3 characters long');
  });
});

// DELETE-Test Case 1: Deleting an Existing item
describe('The DELETE /api/shoppingList endpoint', () => {
  it('should delete the shoppingList by item', async () => {
    const newDeleteitem = {
      item: 'Test item',
    };

    // Create a new cuisine to delete
    const createResponse = await request(app)
      .post('/api/shoppingList')
      .set('Content-Type', 'application/json')
      .send(newDeleteitem);

    const listId = createResponse.body.id; // Get the ID of the newly created cuisine

    // Delete the list by its ID
    const response = await request(app)
      .delete(`/api/shoppingList/${listId}`)
      .set('Accept', 'application/json');

    expect(response.status).toEqual(200);
  });
});

// Delete-Test Case 2: Deleting a Non-Existent item
describe('The DELETE /api/shoppingList endpoint', () => {
  it('should return 404 when trying to delete a non-existent cuisine', async () => {
    const nonExistentitemId = 1000; // Use an ID that doesn't exist

    // Attempt to delete a non-existent item
    const response = await request(app)
      .delete(`/api/shoppingList/${nonExistentitemId}`)
      .set('Accept', 'application/json');

    expect(response.status).toEqual(404);
    // Verify that the HTTP response status code is 404, indicating that the item was not found
    expect(response.text).toContain('Page Not Found'); // Check if the response contains the expected error message
  });
});
