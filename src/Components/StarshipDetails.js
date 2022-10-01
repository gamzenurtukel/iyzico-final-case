import React from "react";
import { Button, Card, Row } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useLocation, Link } from 'react-router-dom';

function StarshipDetails() {
    const location = useLocation();
    const data = location.state;
    console.log(data);

    return (
        <div>
            <Row style={{ margin: 10 }}>
                <div style={{ float: "left" }}>
                    <Button type="primary" icon={<ArrowLeftOutlined />}>
                        <Link to="/starshipslist" style={{ color: "#fff", paddingLeft: 5 }}> Go To Back</Link>
                    </Button>
                </div>
            </Row>

            <Row justify="center" style={{ margin: 10, paddingTop: 10 }}>
                <Card
                    title={data.name}
                    style={{
                        width: 800,
                        borderRadius: 7,
                        border: "2px solid #f0f2f5 ",
                        boxShadow:" 2px 2px 2px #f0f2f5 "                     
                    }}
                    cover={<img alt="starship" src="https://www.designnews.com/sites/designnews.com/files/alamy%20spaceship.jpg" />}
                >
                    <div style={{ textAlign: "left" }}>
                        <p><span>Model:</span> {data.model}</p>
                        <p><span>Manufacturer:</span> {data.manufacturer}</p>
                        <p><span>Max Atmosphering Speed:</span> {data.max_atmosphering_speed}</p>
                        <p><span>Crew:</span> {data.crew}</p>
                        <p><span>Cargo Capacity:</span> {data.cargo_capacity}</p>
                    </div>
                </Card>
            </Row>
            <style jsx="true">{`
        p>span{
            font-weight: 500;
        }               
            `}</style>
        </div>

    );
}
export default StarshipDetails;