# Bold Reviews

## Development
  - Download this project and `cd` inside of it;
  - Run `npm install`;

## Running
  - `npm start`

## Resources
  - <code>GET</code> `[bold_reviews_api_url]/{bold_application_name}/reviews` to get the first 20
    reviews;
  - <code>GET</code> `[bold_reviews_api_url]/{bold_application_name}/reviews?page={page_number}` to
    get more than the first 20 reviews/;

## Responses
### Success Response:
  - Status Code: 200;
  - JSON example:
  ```
    {
      "id": 6958,      
      "shopify_domain": "islamicshopping24.myshopify.com",
      "app_slug": "product-upsell",
      "star_rating": 5,
      "previous_star_rating": null,       
      "created_at": "2018-06-27T21:40:00.517504+00:00",
      "updated_at": null
    }
  ```

### Error Response:
  - Status Code: 404

## License
Copyright © 2018 Stefanie Melo
