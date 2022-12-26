import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img className={cx("avatar")} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a187c4dfa896a5ea449a4c5d3927b20a~c5_100x100.jpeg?x-expires=1672210800&x-signature=Et8CLsHA7m1nAHuHr7JVTMeKC94%3D" alt="An" />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>Ta Thi Thanh An</span>
                    <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
                </h4>
                <span className={cx("username")}>Thanh An</span>
            </div>
        </div>
    );
}

export default AccountItem;