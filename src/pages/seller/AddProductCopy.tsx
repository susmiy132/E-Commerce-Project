import React from "react";

function AddProduct() {


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // POST: {{base_url}}/api/products
        // with token from localstore.getItem('token')
    }
    // axios.get("https://ecom-zb9o.vercel.app/api/categories").then((res) => {
    //     setCategories(res.data.data);
    //   });
    /* 
    {
      "data": [
          {
              "id": 1,
              "title": "furniture",
              "parentId": null,
              "createdAt": "2026-06-09T00:00:00.000Z",
              "updatedAt": "2026-06-09T00:00:00.000Z",
              "subCategories": [
                  {
                      "id": 3,
                      "title": "Table",
                      "parentId": 1,
                      "createdAt": "2026-06-28T02:05:49.178Z",
                      "updatedAt": "2026-06-28T02:05:49.178Z"
                  },
                  {
                      "id": 6,
                      "title": "Chair",
                      "parentId": 1,
                      "createdAt": "2026-06-28T16:53:19.786Z",
                      "updatedAt": "2026-06-28T16:53:19.786Z"
                  }
              ]
          },
          {
              "id": 2,
              "title": "electronics",
              "parentId": null,
              "createdAt": "2026-06-24T00:00:00.000Z",
              "updatedAt": "2026-06-24T00:00:00.000Z",
              "subCategories": []
          },
          {
              "id": 5,
              "title": "clothes",
              "parentId": null,
              "createdAt": "2026-06-28T00:00:00.000Z",
              "updatedAt": "2026-06-28T00:00:00.000Z",
              "subCategories": []
          }
      ]
  }
       */

    return (
        <div className="container">
            <form>
                <input className="border" name="title" />
                <input className="border" name="description" />
                <input className="border" name="price" />
                <input className="border" name="stock" />
                <input className="border" name="categoryId" />
                {/* parent categoryId for subCartoeryId */}
                <input className="border" name="images" multiple />
                <button>submit</button>
            </form>
        </div>
    );
}

export default AddProduct;