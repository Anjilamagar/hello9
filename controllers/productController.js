import Product from "../models/product.js"

// creating product
export const createProduct = async (req, res) => {
    try {
        console.log(req.file);
        const image = req.file.path



        const name = req.body.name
        const brand = req.body.brand
        const price = req.body.price
        const description = req.body.description
        console.log(name, price, brand, description)
        const result = await Product.create({
            name: name,
            brand: brand,
            price: price,
            description: description,
            image: image
        })
        res.json({
            message: "Product create",
            data: result

        })


    } catch (error) {
        console.log("error occured to create", error.message);
        res.status(400).json({
            message: "Failed to create",
            error: error.message
        })
    }
}


// retriving all product
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json({
            message: "Products fetched successfully",
            data: products
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch products",
            error: error.message
        });
    }
};

// retrieving by ID
export const getProductById = async (req, res) => {
    try {
        const id = req.params.id

        const product = await Product.findById(id)

        res.status(200).json({
            message: "Products fetched by id successfully",
            data: product
        });


    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch product by id",
            error: error.message
        });

    }
}





// retrieve by Name
export const getProductByName = async (req, res) => {
    try {
        const { name } = req.body
        const product = await Product.findOne({ name });

        res.status(200).json({
            message: "Products fetched by name successfully",
            data: product
        });


    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch products",
            error: error.message
        });

    }
}



// updating product by ID
export const updateProduct = async (req, res) => {
    try {
        const productid = req.params.id
        const { name, brand, price, description } = req.body

        const reult = await Product.findByIdAndUpdate(productid, {
            name: name,
            brand: brand,
            price: price,
            description: description
        }, { new: true })
        res.status(200).json({
            message: "updated successfully",
            data: reult
        })
    } catch (error) {

        console.log("error occured to update", error.message);
        res.status(400).json({
            message: "Failed to find and update",
            error: error.message
        })

    }
}


// delete product by id
export const deleteProduct = async (req, res) => {

    try {
        const productid = req.params.id
        const result = await Product.findByIdAndDelete(productid);
        console.log("result", result);


        if (!result) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {

        console.log("error occured to delete", error.message);
        res.status(400).json({
            message: "Failed to delete",
            error: error.message
        })

    }

}

// delete product by name

export const deleteProductN = async (req, res) => {

    try {
        const { name } = req.body
        const result = await Product.findOneAndDelete({ name });

        if (!result) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {

        console.log("error occured to delete", error.message);
        res.status(400).json({
            message: "Failed to delete",
            error: error.message
        })

    }

}











// echo "# hello9" >> README.md
// git init
// git add .
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Anjilamagar/hello9.git
// git push -u origin main