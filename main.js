
const users=[
	{
		first_name:'mike',
		last_name:'sheridan',
		age:30,
	},
	{
		first_name:'tim',
		last_name:'lee',
		age:45,
	},
	{
		first_name:'john',
		last_name:'carte',
		age:25,
	},
];
  
 var b=[];
 users.map(function(a){
	 b.push(a.last_name);
	 
 });
 console.log(b);