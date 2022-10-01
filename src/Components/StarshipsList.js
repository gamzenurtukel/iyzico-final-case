import React from "react";
import { useEffect, useState } from 'react';
import { Rate } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { getAllStarships } from "../Redux/slices/starshipsSlice"
import { fetchAsyncStarships } from "../Redux/slices/starshipsSlice";
import { Divider, List } from 'antd';
import { Button, Skeleton } from 'antd';
import {Link} from "react-router-dom";

function StarshipsListPage() {
    const [page, setPage] = useState(1)
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    const starshipsList = useSelector(getAllStarships);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAsyncStarships(page));
        setInitLoading(false);
        setLoading(false);
    }, [dispatch, page]);

    useEffect(() => {
        if (!initLoading) {
            console.log("reduxx", starshipsList);
            const results = starshipsList.results || []
            setData(results);
            setList(results);
        }
    }, [initLoading, starshipsList])

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
                dataSource={list}
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