import React from "react";
import { useEffect, useState } from 'react';
import { Rate } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { getAllStarships } from "../Redux/slices/starshipsSlice"
import { fetchAsyncStarships } from "../Redux/slices/starshipsSlice";
import { getSearchStarships } from "../Redux/slices/starshipsSlice";
import { fetchAsyncStarshipsSearch } from "../Redux/slices/starshipsSlice";
import { Divider, List } from 'antd';
import { Button, Skeleton } from 'antd';
import { Link, useLocation } from "react-router-dom";

function StarshipsListPage() {
    const [page, setPage] = useState(1);
    const [term, setTerm] = useState("");
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const starshipsList = useSelector(getAllStarships);
    const searchStarshipsList = useSelector(getSearchStarships);

    const location = useLocation();
    const searchTerm = location.state

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAsyncStarships(page));
        setInitLoading(false);
        setLoading(false);
    }, [dispatch, page]);

    useEffect(() => {
        if (!initLoading) {
            setTerm(searchTerm?.value || "");
            if (term === "") {
                const results = starshipsList.results || []
                setList(results);
            }
            else {
                dispatch(fetchAsyncStarshipsSearch(searchTerm?.value || ''));
            }
        }
    }, [initLoading, term, searchTerm?.value]);
    console.log('searchStarshipsList', searchStarshipsList)

    useEffect(() => {
        const search = searchStarshipsList.results || [];
        setList(search);
    }, [searchTerm?.value])

    const onLoadMore = () => {
        setLoading(true);
        setPage((page) => page + 1)
        console.log("page", starshipsList)
    }
    const loadMore =
        !initLoading && !loading ? (
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px',
                    marginBottom: 12,
                }}
            >
                <Button onClick={onLoadMore}>Load More</Button>
            </div>
        ) : null;
    return (
        <>
            <Divider orientation="left">Starships List</Divider>
            <List
                className="demo-loadmore-list"
                bordered
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={searchStarshipsList?.results?.length ? searchStarshipsList.results : starshipsList?.results}
                renderItem={(item) => (
                    <List.Item
                        actions={[<Link to="/starshipdetail" state={item}>Detail</Link>]}
                    >
                        <Skeleton title={false} loading={item.loading} active>
                            <List.Item.Meta
                                title={<div style={{ float: "left", marginLeft: "10px" }}>Name: {item.name}</div>}
                                description={<div>Model: {item.model} </div>}
                            />
                            <div>Rate: {item.hyperdrive_rating} <br /> <Rate allowHalf disabled defaultValue={item.hyperdrive_rating} />
                            </div>
                        </Skeleton>
                    </List.Item>
                )}
            />
        </>
    );
};
export default StarshipsListPage;