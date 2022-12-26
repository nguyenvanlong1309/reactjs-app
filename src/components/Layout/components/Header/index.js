import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./Header.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(styles)

function Header() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(() =>{
        setTimeout(() =>{
            setSearchResult([1, 2, 3])
        }, 0);
    }, []);

    return  <header className={cx("wrapper")}>
        <div className={cx("inner")}>
            <div className={cx("logo")}>
                <img src={images.logo} alt="TikTok" />
            </div>
            <Tippy
                interactive
                visible={searchResult.length > 0}
                render={attrs => (
                    <PopperWrapper>
                        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                            Kết quả
                        </div>
                    </PopperWrapper>
                )}
            >
                <div className={cx("search")}>
                    <input placeholder="Search account and video" spellCheck={false} />
                    <button className={cx("clear")}>
                        <FontAwesomeIcon icon = {faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx("loading")} icon = {faSpinner} />

                    
                        <button className={cx("search-btn")}>
                            <FontAwesomeIcon icon = {faMagnifyingGlass} />
                        </button>
                </div>
            </Tippy>
            <div className={cx("actions")}>

            </div>
        </div>
    </header>
}

export default Header;