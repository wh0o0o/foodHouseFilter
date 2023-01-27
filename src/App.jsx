import {useEffect, useState} from 'react'
import Header from "./components/Header/Header";
import MainBanner from "./components/MainBanner/MainBanner";
// import Menu from "./components/Menu/Menu";


import {menuItemsArray, catalogItemsArray} from "./types/itemsArrays";
import MenuItem from "./components/MenuItem/MenuItem";
import CatalogItem from "./components/CatalogItem/CatalogItem";

function App() {

    const [categories, setCategories] = useState(menuItemsArray);
    const [products, setProducts] = useState(catalogItemsArray);
    const [selectedCategory, setSelectedCategory] = useState("none");

    const onChangeSelectedCategory = (type) => {
        setSelectedCategory(type);
    }

    useEffect(() => {
        setProducts((prevState => {

            prevState = [...prevState];

            prevState = catalogItemsArray.filter((product) => product.type === selectedCategory);

            selectedCategory === "none" ? prevState = catalogItemsArray : false;

            return prevState

        }));
    }, [selectedCategory]);

  return (
    <div className="wrapper">
        <div className="wrapper__container">
            <Header/>
            <main>
                <MainBanner/>
                <div className="menu__header">
                    <h2 className="menu__title">Наше Меню</h2>
                    <div className="menu__line"></div>
                </div>
                <div className="menu-items">
                    {
                        categories.map((item) => {
                            return <MenuItem onChangeSelectedCategory={onChangeSelectedCategory} item={item}/>
                        })
                    }
                </div>

                <div className="catalog">

                    <div className="catalog__list">
                        {
                            products.map((item) => {
                                return <CatalogItem item={item} />
                            })
                        }
                    </div>
                    <a href="#" className="catalog__button">Показать ещё</a>
                </div>
            </main>
        </div>
    </div>
  )
}

export default App
