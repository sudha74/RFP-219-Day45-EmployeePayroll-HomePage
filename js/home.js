window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
});

//Template literal ES6 feature
const createInnerHtml = () => {
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th>" +
        "<th>Start Date</th><th>Actions</th></tr>"
    const innerHtml = `${headerHtml}
    
            <tr>
                <td><img class="profile" src="/assets/images/Ellipse -2.png" alt=""></td>
                <td>Narayan MahaDevan</td>
                <td>Male</td>
                <td>
                    <div class="dept-label">Engineering</div>
                    <div class="dept-label">Finance</div>
                </td>
                <td>3000000</td>
                <td>1 nov 2020</td>
                <td>
                    <img onclick="remove(this)" src="/assets/icons/create-black-18dp.svg" alt="delete" id="1">
                    <img onclick="update(this)" src="/assets/icons/delete-black-18dp.svg" alt="delete" id="1">
                </td>
            </tr>
    `
    document.querySelector('#table-display').innerHTML = innerHtml;
}
const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [{
            _name: 'Narayan Mahadevan',
            _gender: 'male',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '500000',
            _startDate: '29 Oct 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: "assets\images\Eclipse-2.PNG"
        },
        {
            _name: 'Aparna Shashanka Keerthi Kumar',
            _gender: 'female',
            _department: [

                'Sales'
            ],
            _salary: '400000',
            _startDate: '29 Oct 2019',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: "assets\images\Ellipse -1.png"
        }
    ];
    return empPayrollListLocal;
}

const getDeptHtml = (deptList) =>{
    let deptHtml = '';
    for(const dept of deptList){
        deptHtml=`${deptHtml}<div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}