import React, {Component} from 'react';

export default class CustomersList extends Component{

    state = {pageTitle: "Customers",
             customersCount:5,
             customers:[
                {id:1, 
                name:"Vince",
                phone:"123-456",
                address:{city: "Nairobi"},
                photo:"https://picsum.photos/id/1011/60",
                },

                {id:2,
                 name:"Billy", 
                 phone:"345-461",
                 address:{city: "Nakuru"},
                 photo:"https://picsum.photos/id/1012/60",
                },

                {id:3, 
                 name:"Coll", 
                 phone:"542-568",
                 address:{city: "Eldoret"},
                 photo:"https://picsum.photos/id/1013/60",
                },

                {id:4, 
                 name:"John",
                 phone:null,
                 address:{city: "Kericho"},
                 photo:"https://picsum.photos/id/1014/60",
                },

                {id:5,
                 name:"Vic",
                 phone:null,
                 address:{city: "Bomet"},
                 photo:"https://picsum.photos/id/1010/60",
                },
             ],
            
            };

            // Applying conditonal CSS styles using classes
            // customerNameStyle = (custName) => {
            //     if(custName.startsWith("V")) return 'green-highlight border-left' ; 
            //     else if(custName.startsWith("B")) return 'red-highlight border-right';
            //     else  return '';
            // };

render(){
    return <div>
                <h4 className='border-bottom m-1 p-1'>{this.state.pageTitle}

                <span className='badge text-bg-secondary m-2'>{this.state.customersCount}</span>

                <button className='btn btn-info'
                onClick={this.onRefreshClick}>Refresh</button>

                </h4>

                <table className='table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Customer Name</th>
                            <th>Phone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getCustomerRow()}
                    </tbody>
                </table>
           </div>
}

// executes when a user clicks on refresh button
onRefreshClick = () =>{
    this.setState({
        customersCount:7,
    });
};

getPhoneToRender = (phone) =>{
    if(phone) return phone; 
    else {
        return <div className='bg-warning p-2 text-center'> No Phone</div>;
    };
}

getCustomerRow = () => {
    return(this.state.customers.map((cust, index) => {
        return(
                <tr key= {cust.id}>
                        <td>{cust.id}</td>
                        <td><img src={cust.photo} alt="Customer" />
                        <div>
                            <button className='btn btn-sm btn-secondary' onClick={ () =>{this.onChangePictureClick(cust,index);}}>Change Picture</button>
                        </div>
                        </td>  
                        <td /*className={this.customerNameStyle(cust.name)}*/>
                        {cust.name}</td>
                        <td>{this.getPhoneToRender(cust.phone)}</td>
                        <td>{cust.address.city}</td>
                </tr>
        );
    }));
};

//executes when the user clicks on "change picture" button on grid
// recieves the 'customer' object and index of the currently clicked customer
onChangePictureClick = (cust, index) => {
    // console.log(cust);  
    // console.log(index);  

    //gets existing customers
    var custArr = this.state.customers;
    custArr[index].photo = 'https://picsum.photos/id/101/60';

    //update 'customers' array in state
    this.setState({customers:custArr});
};






}


