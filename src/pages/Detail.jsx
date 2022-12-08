import Layout from "antd/es/layout/layout";
import { Typography, Row, Col, Image, List, Card } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useSelector } from "react-redux";
const { Title } = Typography;

const Detail = () => {
	const { id } = useParams();
	const { getDetailData } = useAppDispatch();
	const { reciep } = useSelector(state => state.detail);

	useEffect(() => {
		getDetailData(id);
	}, [])

	return (
		<Layout>
			<Row justify={"center"}>
				{reciep.title && <Col>
					<Title justify="center">{reciep.title}</Title>
				</Col>}
			</Row>
			<Row justify={"center"}>
				<Col>
					{reciep.img && <Image
						width={300}
						src={`../${reciep.img}`}
					/>}
				</Col>
				<Col>
					{reciep.cooking &&
						<Card style={{ width: "50%", margin: "0 auto" }}
							span={4} title={"Способ приготовления"}>
							{reciep.cooking}
						</Card>}
				</Col>
			</Row>
		</Layout>
	)
}

export default Detail;
