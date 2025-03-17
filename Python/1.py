productos = {
    "Laptop": 1200,
    "Smartphone": 800,
    "Tablet": 500,
    "Auriculares": 100,
    "Smartwatch": 200
}

producto = input("Ingrese el nombre del producto: ")
precio = productos.get(producto, "Producto no encontrado")
print(f"Precio: {precio}")

