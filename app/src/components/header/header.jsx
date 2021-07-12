import './header.css';
import { UserPanel } from '../userpanel/userpanel';
export const Header = () => {
    return (
        <div className="header">
            <h1>TODO List</h1>
            <UserPanel></UserPanel>
        </div>
    );
};
