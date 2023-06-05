import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import logo from 'images/Logo.svg';
import picture from 'images/picture.png';
import {
  Wrapper,
  Card,
  Picture,
  Logo,
  Img,
  Line,
  ItemTweets,
  ItemFollowers,
  Button,
} from './Tweets.styled';

const Tweets = () => {
  const [itemList, setItemList] = useState([]);
  const [page, setPage] = useState(1);
  const [canLoadMore, setCanLoadMore] = useState(true);

  const [following, setFollowing] = useState(() => {
    const storedFollowing = localStorage.getItem('following');
    return storedFollowing ? JSON.parse(storedFollowing) : [];
  });

  const BASE_URL = 'https://647c6f74c0bae2880ad0b04c.mockapi.io';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/users?page=${page}&limit=3`
        );
        const data = response.data;
        setItemList(prevState => (page === 1 ? data : [...prevState, ...data]));
        if (data.length === 0) {
          setCanLoadMore(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    localStorage.setItem('following', JSON.stringify(following));
  }, [following]);

  const handleFollow = id => {
    setFollowing(prevState => {
      if (prevState.includes(id)) {
        return prevState.filter(followedId => followedId !== id);
      } else {
        return [...prevState, id];
      }
    });
  };

  const loadMore = () => setPage(prevPage => prevPage + 1);

  return (
    <>
      <div>
        <NavLink to="/">
          <Button type="button">
            <span>Back</span>
          </Button>
        </NavLink>
      </div>
      {!itemList || itemList.length === 0 ? (
        <b>Request in progress...</b>
      ) : (
        <Wrapper>
          {itemList.map(({ id, tweets, followers, avatar }) => (
            <Card key={id}>
              <Logo src={logo} alt="logo GOIT" />
              <Picture src={picture} alt="" />
              <Img src={avatar} alt="avatar" />
              <Line></Line>
              <ItemTweets>{tweets} TWEETS</ItemTweets>
              <ItemFollowers>
                {followers.toLocaleString('en-US')} FOLLOWERS
              </ItemFollowers>
              <Button
                following={following.includes(id)}
                onClick={() => handleFollow(id)}
              >
                {following.includes(id) ? 'FOLLOWING' : 'FOLLOW'}
              </Button>
            </Card>
          ))}
        </Wrapper>
      )}
      {canLoadMore && (
        <Button type="button" onClick={loadMore}>
          Load More
        </Button>
      )}
    </>
  );
};

export default Tweets;
