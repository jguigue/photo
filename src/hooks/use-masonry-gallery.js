import imagesloaded from "imagesloaded";
import Isotope from "isotope-layout";
import { useEffect, useState } from "react";

const useMasonry = (
    GalleryData,
    masonryListWrap,
    masonryGrid,
    btnWrap,
    btn
) => {
    const [categories] = useState([]);
    useEffect(() => {
        // This for Images
        const masonryList = document.querySelector(masonryListWrap);
        imagesloaded(masonryList, () => {
            const projectItems = masonryList.querySelectorAll(masonryGrid);
            let start = 1;
            while (start < projectItems.length) {
                projectItems[start].classList.add("grid-width-2");
                start += 4;
            }
            let Iso = new Isotope(masonryList, {
                itemSelector: masonryGrid,
            });
        });
    }, [btn, btnWrap, masonryGrid, masonryListWrap, GalleryData]);
    return { categories };
};

export default useMasonry;
