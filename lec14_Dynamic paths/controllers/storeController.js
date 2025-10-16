const Favourite = require('../models/favourite');
const Home=require('../models/home');

//exports.registeredHomes = registeredHomes;

exports.getIndex=(req, res, next) => {

  const registeredHomes=Home.fetchAll(registeredHomes=>res.render('./store/index', {registeredHomes: registeredHomes,
  pageTitle: 'airbnb Home',
  currentPage: 'index'
})
);
};

exports.getHome=(req, res, next) => {

  const registeredHomes=Home.fetchAll(registeredHomes=>res.render('./store/home-list', {registeredHomes: registeredHomes,
  pageTitle: 'Homes List',
  currentPage: 'Home'
})
);
};


exports.getBookings = (req, res, next) => {
res.render('./store/bookings', {
  pageTitle: 'My Bookings',
  currentPage: 'bookings' 
  })
};

exports.getFavouriteList = (req, res, next) => {
  const registeredHomes=Home.fetchAll(registeredHomes=>res.render('./store/favourite-list', {registeredHomes: registeredHomes,
  pageTitle: 'My Favourites',
  currentPage: 'favourites'
})
);
};

exports.postAddToFavourite=(req,res,next)=>{
  console.log("Came to add to Favourite", req.body);
  Favourite.addToFavourite(req.body.id,error=>{
    if(error){
      console.log("Error while marking favourite");
    }
    res.redirect("/favourites");
  })
}

exports.getHomeDetails=(req, res, next) => {
   const homeId=req.params.homeId;
   console.log("At home dtails page",homeId);
   Home.findById(homeId,home=>{
    if(!home){
      console.log("home not found");
      res.redirect("/homes");
    }
    else{
    res.render('./store/home-detail', {
    home: home,
    pageTitle: 'Home Details',
    currentPage: 'Home'
   });
    }
})
};
