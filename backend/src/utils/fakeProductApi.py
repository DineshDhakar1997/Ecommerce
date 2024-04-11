import requests
import json

# Make a GET request to the fakeStoreAPI products endpoint
response = requests.get('https://fakestoreapi.com/products')

# Check if the request was successful
if response.status_code == 200:
    # Get a random product from the API response
    random_product = response.json()[0]

    # Extract product details
    name = random_product['title']
    price = random_product['price']
    category = random_product['category']
    description = random_product['description']

    # Generate JSON object for the request body
    new_product_json = {
        "name": name,
        "photo": "random_product.jpg",
        "price": price,
        "stock": 100,  # Assuming stock is constant for this example
        "category": category,
        "description": description
    }

    # Convert dictionary to JSON
    json_data = json.dumps(new_product_json, indent=2)
    print(json_data)
else:
    print("Failed to fetch product details from the fakeStoreAPI")