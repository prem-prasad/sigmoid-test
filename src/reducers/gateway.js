const initState = {
  categories: [],

  grocery_vendors: [],
  medicine_vendors: [],
  liquor_vendors: [],
  restaurant_vendors: [],
  food_vendors: [],
  cider_vendors: [],
  champagne_vendors: [],
  mixeddrinks_vendors: [],
  redwine_vendors: [],
  spirits_vendors: [],
  whitewine_vendors: [],
  pets_vendors: [],
  vegetables_vendors: [],
  laundry_vendors: [],
  meat_vendors: [],

  grocery_products: [],
  medicine_products: [],
  liquor_products: [],
  restaurant_products: [],
  food_products: [],
  cider_products: [],
  champagne_products: [],
  mixeddrinks_products: [],
  redwine_products: [],
  spirits_products: [],
  whitewine_products: [],
  pets_products: [],
  vegetables_products: [],
  laundry_products: [],
  meat_products: [],

  subCategories: [],

  grocery_subcategory: [],
  medicine_subcategory: [],
  liquor_subcategory: [],
  restaurant_subcategory: [],
  food_subcategory: [],
  cider_subcategory: [],
  champagne_subcategory: [],
  mixeddrinks_subcategory: [],
  redwine_subcategory: [],
  spirits_subcategory: [],
  whitewine_subcategory: [],
  pets_subcategory: [],
  vegetables_subcategory: [],
  laundry_subcategory: [],
  meat_subcategory: [],

  individualProduct: null,
  auth: false,
  cart: [],
  promocode: '',
  zipcode: null,
  vendor_unable: false,
  success_message: '',
  error_message: '',
  email_loader: false,
  email_message: false
};

const gateway = (state = initState, action) => {
  switch (action.type) {
    case 'USER_SIGNUP':
      console.log('message is ', action.payload);
      return { ...state, success_message: action.payload.data };

    case 'USER_SIGNUP_ERROR':
      return { ...state, error_message: action.payload.error };

    case 'USER_LOGIN':
      return { ...state, auth: true };

    case 'USER_LOGOUT':
      return { ...state, auth: false };

    case 'USER_LOGIN_ERROR':
      return state;

    case 'GET_CATEGORY_HOME':
      return { ...state, categories: action.payload.data.categories };

    case 'GET_CATEGORY_HOME_ERROR':
      return state;

    case 'GET_VENDORS':
      if (action.payload.data === 'Currently not available in your area') {
        return {
          ...state,
          vendor_unable: 'Currently not available in your area'
        };
      } else {
        switch (action.payload.type) {
          case 'Grocery':
            return {
              ...state,
              vendor_unable: false,
              grocery_vendors: action.payload.data
            };
          case 'Medicine':
            return {
              ...state,
              vendor_unable: false,
              medicine_vendors: action.payload.data
            };
          case 'Liquor':
            return {
              ...state,
              vendor_unable: false,
              liquor_vendors: action.payload.data
            };
          case 'Restaurant':
            console.log(action.payload.data);
            return {
              ...state,
              vendor_unable: false,
              restaurant_vendors: action.payload.data
            };
          case 'Food':
            return {
              ...state,
              vendor_unable: false,
              food_vendors: action.payload.data
            };
          case 'MixedDrinks':
            return {
              ...state,
              vendor_unable: false,
              mixeddrinks_vendors: action.payload.data
            };
          case 'Cider':
            return {
              ...state,
              vendor_unable: false,
              cider_vendors: action.payload.data
            };
          case 'WhiteWine':
            return {
              ...state,
              vendor_unable: false,
              whitewine_vendors: action.payload.data
            };
          case 'RedWine':
            return {
              ...state,
              vendor_unable: false,
              redwine_vendors: action.payload.data
            };
          case 'Champagne':
            return {
              ...state,
              vendor_unable: false,
              champagne_vendors: action.payload.data
            };
          case 'Spirits':
            return {
              ...state,
              vendor_unable: false,
              spirits_vendors: action.payload.data
            };
          case 'Pets':
            return {
              ...state,
              vendor_unable: false,
              pets_vendors: action.payload.data
            };
          case 'Vegetables':
            return {
              ...state,
              vendor_unable: false,
              vegetables_vendors: action.payload.data
            };
          case 'Laundry':
            return {
              ...state,
              vendor_unable: false,
              laundry_vendors: action.payload.data
            };
          case 'Meat':
            return {
              ...state,
              vendor_unable: false,
              meat_vendors: action.payload.data
            };
          default:
            return { ...state };
        }

        return { ...state, vendors: action.payload.data, vendor_unable: false };
      }

    case 'GET_VENDORS_ERROR':
      return state;

    case 'GET_SUBCATEGORIES':
      switch (action.payload.type) {
        case 'Grocery':
          return { ...state, grocery_subcategory: action.payload.data };
        case 'Medicine':
          return { ...state, medicine_subcategory: action.payload.data };
        case 'Liquor':
          return { ...state, liquor_subcategory: action.payload.data };
        case 'Restaurant':
          return { ...state, restaurant_subcategory: action.payload.data };
        case 'Food':
          return { ...state, food_subcategory: action.payload.data };
        case 'MixedDrinks':
          return { ...state, mixeddrinks_subcategory: action.payload.data };
        case 'Cider':
          return { ...state, cider_subcategory: action.payload.data };
        case 'WhiteWine':
          return { ...state, whitewine_subcategory: action.payload.data };
        case 'RedWine':
          return { ...state, redwine_subcategory: action.payload.data };
        case 'Champagne':
          return { ...state, champagne_subcategory: action.payload.data };
        case 'Spirits':
          return { ...state, spirits_subcategory: action.payload.data };
        case 'Pets':
          return { ...state, pets_subcategory: action.payload.data };
        case 'Vegetables':
          return { ...state, vegetables_subcategory: action.payload.data };
        case 'Laundry':
          return { ...state, laundry_subcategory: action.payload.data };
        case 'Meat':
          return { ...state, meat_subcategory: action.payload.data };

        default:
          return { ...state };
      }
    case 'GET_SUBCATEGORIES_ERROR':
      return state;

    case 'GET_SUBCATEGORY_PRODUCTS':
      return { ...state, products: action.payload.data.product.items };

    case 'GET_SUBCATEGORY_PRODUCTS_ERROR':
      return state;

    case 'GET_CATEGORY_PRODUCTS':
      switch (action.payload.type) {
        case 'Grocery':
          return { ...state, grocery_products: action.payload.data };
        case 'Medicine':
          return { ...state, medicine_products: action.payload.data };
        case 'Liquor':
          return { ...state, liquor_products: action.payload.data };
        case 'Restaurant':
          return { ...state, restaurant_products: action.payload.data };
        case 'Food':
          return { ...state, food_products: action.payload.data };
        case 'MixedDrinks':
          return { ...state, mixeddrinks_products: action.payload.data };
        case 'Cider':
          return { ...state, cider_products: action.payload.data };
        case 'WhiteWine':
          return { ...state, whitewine_products: action.payload.data };
        case 'RedWine':
          return { ...state, redwine_products: action.payload.data };
        case 'Champagne':
          return { ...state, champagne_products: action.payload.data };
        case 'Spirits':
          return { ...state, spirits_products: action.payload.data };
        case 'Pets':
          return { ...state, pets_products: action.payload.data };
        case 'Vegetables':
          return { ...state, vegetables_products: action.payload.data };
        case 'Laundry':
          return { ...state, laundry_products: action.payload.data };
        case 'Meat':
          return { ...state, meat_products: action.payload.data };

        default:
          return { ...state };
      }
    case 'GET_PRODUCTS_ERROR':
      return state;

    case 'GET_INDIVIDUAL_PRODUCT':
      return state;

    case 'GET_INDIVIDUAL_PRODUCT_ERROR':
      return state;

    case 'ADD_TO_CART':
      return { ...state, cart: action.payload.data };

    case 'ADD_TO_CART_ERROR':
      return state;

    case 'REMOVE_FROM_CART':
      const val = state.cart.filter((item) => item.pid !== action.payload.pid);
      return { ...state, cart: val };

    case 'REMOVE_FROM_CART_ERROR':
      return state;

    case 'GET_CART':
      return { ...state, cart: action.payload.data };

    case 'GET_CART_ERROR':
      return state;

    case 'GET_PROMOCODE':
      return { ...state, promocode: action.payload.data };

    case 'GET_PROMOCODE_ERROR':
      console.log('Promode fetching error', action.err);

    case 'GET_ZIPCODE':
      return { ...state, zipcode: action.payload };

    case 'GET_ZIPCODE_ERROR':
      return state;

    case 'GET_MY_ORDERS':
      return state;

    case 'GET_MY_ORDERS_ERROR':
      return state;

    case 'CHECKOUT':
      return state;

    case 'CHECKOUT_ERROR':
      return state;

    case 'ALERT_LOAD':
      return { ...state, alert: true };

    case 'ALERT_UNLOAD':
      return { ...state, alert: false };

    case 'SUCCESS_MESSAGE':
      return { ...state, success_message: action.payload };

    case 'CLEAR_SUCCESS_MESSAGE':
      return { ...state, success_message: '' };

    case 'ERROR_MESSAGE':
      // console.log( '.payload in reducer',action.payload);
      // console.log( '.data in reducer',action.payload.data);
      return { ...state, error_message: action.payload };

    case 'CLEAR_ERROR_MESSAGE':
      return { ...state, error_message: '' };
    case 'EMAIL_LOADING':
      return { ...state, email_loader: true };
    case 'EMAIL_UNLOADING':
      return { ...state, email_loader: false };
    case 'EMAIL_SUCCESS':
      return { ...state, email_message: action.payload };
    default:
      return state;
  }
};

export default gateway;
