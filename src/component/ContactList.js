import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux"; // redux store에서 읽어오기

const ContactList = () => {
    const { contactList, keyword } = useSelector((state) => state);
    console.log("contactList:", contactList);
    console.log("keyword:", keyword);
    let [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        if (keyword !== "") {
            // 키워드가 있으면 키워드를 포함하는 객체를 list 배열에 담기
            let list = contactList.filter((item) =>
                item.name.includes(keyword)
            );
            setFilteredList(list);
        } else {
            // 키워드가 없으면 전체 리스트를 담기
            setFilteredList(contactList);
        }
    }, [keyword, contactList]); // 리듀서의 state가 변경될 때 실행
    return (
        <>
            <SearchBox />
            <div>검색결과: {filteredList.length}</div>
            {filteredList.map((item, index) => (
                <ContactItem key={index} item={item} />
            ))}
        </>
    );
};

export default ContactList;
