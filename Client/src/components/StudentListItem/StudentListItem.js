import React from "react"

function handleClick() {
    console.log("go to student page")
}

function StudentListItem(props) {
    return (
        <tr>
            <th>{props.student._id}</th>
            <td><a>{`${props.student.firstName}  ${props.student.lastName}`}</a>
            </td>
            <td>67</td>
            <td>99</td>
            <td>64</td>
            <td>93</td>
            <td>68</td>
            <td>82</td>
            <td>81</td>
            <td><div className="button is-primary" onClick={handleClick}>View Student</div></td>
        </tr>
    )
}

export default StudentListItem;