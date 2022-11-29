
import Cookies from 'universal-cookie';
import { NavLink, useNavigate } from 'react-router-dom';
import ResponsiveNavbar from '@opuscapita/react-responsive-navbar';
import { DropdownList } from 'react-widgets/cjs';
function InsuranceForm() {
    const navigate = useNavigate()
    const list = [
        { name: 'Item 1', href: '/item1' },
        { name: 'Item 2', href: '/item2' },
    ];

    const activeKey = 2;
    return (
        <div>
            <ResponsiveNavbar
                activeKey={activeKey}
                list={list}
                onSelect={navigate('/Personal')}
            />
            <>
                <DropdownList
                    defaultValue="Yellow"
                    data={["Red", "Yellow", "Blue", "Orange"]}
                />
            </>;
        </div>
    )
}
export default InsuranceForm