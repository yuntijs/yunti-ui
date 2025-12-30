import { Highlighter } from '@yuntijs/ui';
import { Button, Flex, Space } from 'antd';
import { useCallback, useRef, useState } from 'react';

const fullCode = `import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUser = async (id: number): Promise<User> => {
  const response = await fetch(\`/api/users/\${id}\`);
  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }
  return response.json();
};

export const UserProfile = ({ userId }: { userId: number }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchUser(userId)
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return null;

  return (
    <div className="user-profile">
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};`;

export default () => {
  const [code, setCode] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const indexRef = useRef(0);

  const startStreaming = useCallback(() => {
    if (isStreaming) return;

    setCode('');
    setIsStreaming(true);
    indexRef.current = 0;

    intervalRef.current = setInterval(() => {
      if (indexRef.current < fullCode.length) {
        // 每次添加 1-5 个字符，模拟真实流式输出
        const charsToAdd = Math.floor(Math.random() * 5) + 1;
        const nextIndex = Math.min(indexRef.current + charsToAdd, fullCode.length);
        setCode(fullCode.slice(0, nextIndex));
        indexRef.current = nextIndex;
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        setIsStreaming(false);
      }
    }, 30);
  }, [isStreaming]);

  const stopStreaming = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsStreaming(false);
  }, []);

  const reset = useCallback(() => {
    stopStreaming();
    setCode('');
    indexRef.current = 0;
  }, [stopStreaming]);

  return (
    <Flex gap="small" style={{ width: '100%' }} vertical>
      <Space>
        <Button disabled={isStreaming} onClick={startStreaming} type="primary">
          Start Streaming
        </Button>
        <Button disabled={!isStreaming} onClick={stopStreaming}>
          Stop
        </Button>
        <Button onClick={reset}>Reset</Button>
      </Space>
      <Flex flex={1}>
        <Highlighter
          animated
          copyable
          fullFeatured
          language="tsx"
          showLanguage
          style={{ maxHeight: 400, height: 400, width: 600 }}
          wrap
        >
          {code}
        </Highlighter>
      </Flex>
    </Flex>
  );
};
