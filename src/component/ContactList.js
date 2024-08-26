import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux"; // redux store에서 읽어오기

const ContactList = () => {
    const { contactList, keyword } = useSelector((state) => state);
    let [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        if (keyword !== "") {
            let list = contactList.filter((item) =>
                item.name.includes(keyword)
            );
            setFilteredList(list);
        } else {
            setFilteredList(contactList);
        }
    }, [keyword, contactList]); // 리듀서의 state가 변경될 때 실행
    return (
        <>
            <SearchBox />
            <div>phone count: {filteredList.length}</div>
            {filteredList.map((item, index) => (
                <ContactItem key={index} item={item} />
            ))}
        </>
    );
};

export default ContactList;
