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
			<Row align='middle' className={"row row--detail"}>
				{reciep.title && <Col>
					<Title justify="center">{reciep.title}</Title>
				</Col>}
				<Image
					width={300}
					src={`../${reciep.img}`}
				/>
			</Row>
			<Row>
				<List
					style={{ width: "70%", margin: "0 auto" }}
					dataSource={reciep.cooking}
					renderItem={(item, i) => (
						<List.Item>
							<Card title={i + 1}>{item}</Card>
						</List.Item>
					)}
				>
				</List>
			</Row>
		</Layout>
	)
}

export default Detail;
