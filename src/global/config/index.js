import dev from './dev';
import dist from './dist';

let useConfig = dev;
if (process.env.NODE_ENV === 'production') {
  useConfig = dist;
}

export default useConfig;
