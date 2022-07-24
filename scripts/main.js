const employees = [
    {
        name: 'Enrique George',
        birthday: '01/04/1954'
    },
    {
        name: 'Jim Coleman',
        birthday: '02/07/1970'
    },
    {
        name: 'Luca Merighi',
        birthday: '23/05/2002'
    },
    {
        name: 'Carlos Ramirez',
        birthday: '17/09/2001'
    },
    {
        name: 'Vernom Thomas',
        birthday: '24/01/1993'
    },
    {
        name: 'Georgia Mills',
        birthday: '18/11/1999'
    },
    {
        name: 'Antonio Curtis',
        birthday: '20/03/2002'
    },
    {
        name: 'Francis Spencer',
        birthday: '30/07/1996'
    }
]

function actualDate() {
    const date = new Date()

    const today = date.getDate()
    const modifiedTodayDate = today <= 9 ? `0${today}` : `${today}`

    const month = date.getMonth() + 1
    const modifiedMonthDate = month <= 9 ? `0${month}` : `${month}`

    const modifiedDate = modifiedTodayDate + '/' + modifiedMonthDate

    const dateHTMLElement = document.querySelector('.date')
    dateHTMLElement.innerHTML = modifiedDate

    checkEmployeeBirthday()
}

function addEmployees(employee) {
    const employeeContainer = document.querySelector('#employee-table tbody')
    const tr = document.createElement('tr')
    tr.classList.add('employee-card')
    tr.innerHTML = employeeHTMLElement(employee)
    employeeContainer.appendChild(tr)
}

function employeeHTMLElement(employee) {
    const html = `
        <td>
            ${employee.name}
        </td>
        <td>
            ${employee.birthday}
        </td>
    `

    return html
}

function checkEmployeeBirthday() {
    employees.forEach(employee => {
        const employeeBirthday = employee.birthday.slice(0, 5)

        const dateHTMLElement = document.querySelector('.date')
        const todayDate = dateHTMLElement.innerText

        if(employeeBirthday == todayDate) {
            updateEmployeeList(employee)
            modal(employee)   
        }
    })
}

function updateEmployeeList(employee) {
    const employeeIndex = employees.indexOf(employee)
    
    employees.splice(employeeIndex, 1)
    employees.unshift(employee)
}

function modal(employee) {
    const modal = document.querySelector('#modal')
    modal.classList.add('show')

    const employeeName = document.querySelector('.employee-name')
    employeeName.innerText = employee.name

    // Fecha o Modal
    const closeIcon = document.querySelector('.close-icon')
    closeIcon.addEventListener('click', () => {
        modal.classList.remove('show')
    })
}

function employeeCard(employee) {
    const employeeBirthday = employee.birthday.slice(0, 5)

    const dateHTMLElement = document.querySelector('.date')
    const todayDate = dateHTMLElement.innerText

    if(employeeBirthday == todayDate) {
        const employeeCard = document.querySelector('.employee-card')
        employeeCard.classList.add('birthday')

        const birthdayIconsContainer = document.querySelector('.birthday-icons-container')
        birthdayIconsContainer.classList.add('birthday')
        
        employeeCard.addEventListener('click', () => {
            const modal = document.querySelector('#modal')
            modal.classList.add('show')
        })
    }
}

actualDate()

employees.forEach(employee => {
    addEmployees(employee)
    employeeHTMLElement(employee)
    employeeCard(employee)
})