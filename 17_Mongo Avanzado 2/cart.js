const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  products: {
    type: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product"
        }
      }
    ]
  }
});

CartSchema.pre('find', function(){
  this.populate("products.product")
})

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;

// INSERT INTO public.users
// (id, email, first_name, last_name, phone_number, dob, address, status, risk_profile, device_id, national_id, is_politically_exposed_person, name_on_card, occupation_id, last_onboarding_process_date, incomes, initial_choice, plaft_score, is_state_supplier, id_lead, auth0_id, mcr_resolution, customer_id_temenos, plaft_waiver, principal_device_id, mcr_extended_response, "pepDetails", mcr_waiver)
// VALUES('f4ds5fsd5', 'camilo@gmail.com', 'Camilo', 'Lindarte', '', '', '', 'NEWLY_REGISTERED'::character varying, '', '', '', false, '', 0, '', 0, '', '', false, ?, '', false, '', false, '', '', '', '');
