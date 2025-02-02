import { useEffect, useState, useRef } from "react";
import "./load-more-data.css";

export default function LoadMoreData() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const isFirstRender = useRef(true); // Track first render

    const fetchProducts = async (count) => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${count * 20}`
            );
            if (!response.ok) throw new Error("Failed to fetch products");
            const pros = await response.json();

            if (pros?.products?.length) {
                setProducts((prevData) => [...prevData, ...pros.products]);
            }
        } catch (e) {
            console.error(e.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            fetchProducts(0)
        }
        else if (count > 0) {
            fetchProducts(count)
        }
    },[count])

    useEffect(() => {
        if (products.length === 100) {
            setDisabled(true);
        }
    }, [products]);

    const handleLoadMore = () => {
        if (!loading && !disabled) {
            setCount((prev) => prev + 1);
        }
    };

    return (
        <div className="loadmoredata-container">
            <div className="product-container">
                {products.length > 0 &&
                    products.map((item) => (
                        <div className="product" key={item.id}>
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))}
            </div>
            <div className="loadmore-button">
                <button disabled={disabled || loading} onClick={handleLoadMore}>
                    {loading ? "Loading..." : "Load More"}
                </button>
            </div>
            {disabled && <p>You have reached the end.</p>}
        </div>
    );
}
