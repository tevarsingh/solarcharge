var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	
	unique_id: Number,
	email: String,
	username: String,
	veichleNumber: String,
	batteryCapacity: String,
	ageOfVeichle: Number,
	veichleModelName: String,
	driversId: String,
	password: String,
	passwordConf: String

}),
User = mongoose.model('User', userSchema);

module.exports = User;






var mongoose = require('mongoose');
var Schema = mongoose.Schema;

bookingSchema = new Schema({

    booking_id: Number,        // unique booking number
    user_id: Number,           // links to User.unique_id
    date: String,              // "2025-11-20"
    hour: Number,              // 0–23
    slotStatus: String,        // "booked", "available", "cancelled"
    veichleNumber: String,     // user’s vehicle
    stationId: String,         // charging station ID (optional)
    created_at: {
        type: Date,
        default: Date.now
    }
    
}),
Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;








