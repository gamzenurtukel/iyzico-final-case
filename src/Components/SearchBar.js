import React from 'react';
import { Input } from 'antd';
import { useNavigate } from "react-router-dom";

const { Search } = Input;
export default function SearchBar() {
    const navigate = useNavigate();
    const onSearch = (value) => {
        navigate("/starshipslist", { state: { value } });
             
    }
    return (
        <div style={{ display: "flex", alignItems: "center", }}>
            <Search placeholder="search starships..." onSearch={onSearch}  enterButton />
        </div>
    )
}