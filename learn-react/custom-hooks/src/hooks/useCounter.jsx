import { useEffect, useState } from "react";

export default () => {
  const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prevCounter) => prevCounter - 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

}