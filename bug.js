```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of functional update
    setCount(prevCount => prevCount + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```