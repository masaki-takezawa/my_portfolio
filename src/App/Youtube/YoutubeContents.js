import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CssVariables } from '../../Common/CssVariables';
import CardItemA from '../../Shared/Cards/CardItemA';
import Cards from '../../Shared/Cards/Cards';

const YoutubeContents = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  //Youtube APiを取得
  const fetchData = async () => {
    const response = await fetch(
      'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC1vabw6f4d5X1UINyb1mR_Q&maxResults=10&order=date&type=video&key=AIzaSyAg8BXavFM8ni5_XhZkFeN8ZuhDDntd1sU'
    );
    const data = await response.json();
    const items = data.items;

    setUsers(items);
    setLoading(false);
  };

  //初回ローディング時のみデータを取得
  useEffect(() => {
    fetchData();
  }, []);

  //API取得完了まではLoadingテキストを表示
  return (
    <div>
      {loading ? (
        <BlLoading>Loading...</BlLoading>
      ) : (
        <Cards>
          {users.map((user) => {
            return (
              <CardItemA
                path={'https://www.youtube.com/watch?v=' + user.id.videoId}
                target='_blank'
                src={user.snippet.thumbnails.medium.url}
                text={user.snippet.title}
              />
            );
          })}
        </Cards>
      )}
    </div>
  );
};

export default YoutubeContents;

const BlLoading = styled.h1`
  color: ${CssVariables.mainColor};
`;
