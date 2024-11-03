import './loader.css'
import { useSelector } from 'react-redux';
export default function Loader() {
  const { loaderColor } = useSelector((state) => state.mode);
return (
<div className="dot-spinner" style={{ '--uib-color': loaderColor }}>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
</div>
  )
}
