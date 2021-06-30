
export default function UserList({users, setUsers}) {
    return (
        <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>N</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                    </tr>
                </tbody>
                <tbody>
                    {
                        users.map(item => 
                            
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.address.street}</td>
                                <td>{item.phone}</td>
                                <td>{item.website}</td>
                                <td>{item.company.name}</td>
                            </tr>
                            
                            )
                    }
                </tbody>
        </table>
    )
}
