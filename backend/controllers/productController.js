import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// function for add product
export const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    const imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    };

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product Added" });
  } catch (e) {
    console.log(e);
    res.json({ success: false, message: e.message });
  }
};

// function for list product
export const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (e) {
    console.log(e);
    res.json({ success: false, message: e.message });
  }
};

// function for remove product
export const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product Removed" });
  } catch (e) {
    console.log(e);
    res.json({ success: false, message: e.message });
  }
};

// function for single product info
export const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);

    res.json({ success: true, product });
  } catch (e) {
    console.log(e);
    res.json({ success: false, message: e.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id, name, description, price, category, subCategory, sizes } =
      req.body;

    const product = await productModel.findById(id);
    if (!product) {
      return res.json({ success: false, message: "Product not found" });
    }

    // ✅ Start with old images
    let imagesUrl = [...product.image];

    // ✅ Check for uploaded files safely
    const uploadedFiles = [];
    if (req.files) {
      const image1 = req.files.image1?.[0];
      const image2 = req.files.image2?.[0];
      const image3 = req.files.image3?.[0];
      const image4 = req.files.image4?.[0];

      [image1, image2, image3, image4].forEach((img, index) => {
        if (img) uploadedFiles.push({ file: img, index });
      });
    }

    // ✅ If new images uploaded, replace only those slots
    if (uploadedFiles.length > 0) {
      for (const { file, index } of uploadedFiles) {
        const result = await cloudinary.uploader.upload(file.path, {
          resource_type: "image",
        });
        imagesUrl[index] = result.secure_url; // replace only this index
      }
    }

    // ✅ Update product fields
    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price ? Number(price) : product.price;
    product.category = category || product.category;
    product.subCategory = subCategory || product.subCategory;
    product.sizes = sizes ? JSON.parse(sizes) : product.sizes;
    product.image = imagesUrl;

    await product.save();

    res.json({ success: true, message: "Product Updated", product });
  } catch (e) {
    console.error("updateProduct error:", e);
    res.json({ success: false, message: e.message });
  }
};
