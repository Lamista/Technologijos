import React from 'react'


const ProductAdministrationFormComponent = ({ handleSubmit }) => {
    return (
        <div>

            <form className="container my-5" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="productTitle">Title</label>
                    <input type="text" className="form-control" id="productTitle" name="productTitle" />
                </div>
                <div className="form-group">
                    <label htmlFor="productImage">Image</label>
                    <select className="form-control" id="productImage" name="productImage" >
                        <option value="url1">White</option>
                        <option value="url2">Black</option>
                        <option value="url3">Grey</option>
                        <option value="url4">Pink</option>
                        <option value="url5">Blue</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="productDescription">Description</label>
                    <textarea className="form-control" id="productDescription" rows="3" name="productDescription"></textarea>
                </div>
                <div className="row">
                    <div className="form-group col-6">
                        <label htmlFor="productPrice">Price</label>
                        <input type="text" className="form-control" id="productPrice" name="productPrice" />
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="productQuantity">Quantity</label>
                        <input type="text" className="form-control" id="productQuantity" name="productQuantity" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    )
}

export default ProductAdministrationFormComponent
