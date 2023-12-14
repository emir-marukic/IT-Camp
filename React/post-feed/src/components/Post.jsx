import { Card, Col, Row, Space } from "antd";
import { useEffect, useState } from "react";
import Heart from "./Heart";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch posts
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data.posts))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  useEffect(() => {
    // Fetch users based on the number of posts
    if (posts.length > 0) {
      fetch(`https://randomuser.me/api/?results=${posts.length}`)
        .then(res => res.json())
        .then(data => setUsers(data.results))
        .catch(error => console.error('Error fetching users:', error));
    }
  }, [posts]);

  console.log(users);

  return (
    <Row justify="center" align="middle">
      <Col xs={24} sm={20} md={16} lg={12} xl={16}>
        {posts.map((item, index) => (
          <Card key={item.id} style={{ marginBottom: 16 }}>
            <Row gutter={[16, 16]} align="middle" style={{marginBottom:20}}>
              {users[index] && (
                <Col>
                  <img src={users[index].picture.medium} alt="" style={{borderRadius:340,}}/>
                </Col>
              )}
              {users[index] && (
                <Col>
                  <div>
                    <p style={{ fontSize: 20 }}>{users[index].name.first} {users[index].name.last}</p>
                  </div>
                </Col>
              )}
            </Row>
            <b>{item.title}</b>
            <p>{item.body}</p>
            <Row justify="center" align="bottom" style={{ width: "3.6%" }}>
              <Space >
                <p>{item.reactions}</p>
                <div style={{ marginTop: 5 }}>
                  <Heart />
                </div>
              </Space>
            </Row>
          </Card>
        ))}
      </Col>
    </Row>
  );
};

export default Post;
