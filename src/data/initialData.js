export const initialRooms = [
  {
    id: 'conf_room',
    name: 'Conference Room',
    capacity: 15,
    cost: 1500,
    image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=500&q=80',
    quantity: 3
  },
  {
    id: 'auditorium',
    name: 'Auditorium Hall',
    capacity: 200,
    cost: 5500,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80',
    quantity: 2
  },
  {
    id: 'presentation',
    name: 'Presentation Room',
    capacity: 50,
    cost: 3500,
    image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=500&q=80',
    quantity: 0
  },
  {
    id: 'large_meeting',
    name: 'Large Meeting Room',
    capacity: 10,
    cost: 1000,
    image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?w=500&q=80',
    quantity: 0
  },
  {
    id: 'small_meeting',
    name: 'Small Meeting Room',
    capacity: 5,
    cost: 800,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80',
    quantity: 1
  }
];

export const initialAddons = [
  {
    id: 'projectors',
    name: 'Projectors',
    cost: 200,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--u45Td8wBBSpj-XN6q9PhH01SQfTLUObYgd8eXMhJQ&s=10',
    quantity: 4
  },
  {
    id: 'speaker',
    name: 'Speaker',
    cost: 35,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=80',
    quantity: 4
  },
  {
    id: 'microphones',
    name: 'Microphones',
    cost: 45,
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&q=80',
    quantity: 2
  },
  {
    id: 'whiteboards',
    name: 'Whiteboards',
    cost: 80,
    // Updated Whiteboard image
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcD6awdg-oauDMWIsXG52pFWl_gqXwfSIH-HSwRAQQqQ&s=10https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=500&q=80',
    quantity: 1
  },
  {
    id: 'signage',
    name: 'Signage',
    cost: 80,
    // Updated Signage board image
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmBm6PMqx6_rPaZeEr_HlQIdinyluWY4nRkuwef_tfzA&s=10',
    quantity: 0
  }
];

export const initialMeals = [
  { id: 'breakfast', name: 'Breakfast', cost: 50, selected: false },
  { id: 'high_tea', name: 'High Tea', cost: 25, selected: true },
  { id: 'lunch', name: 'Lunch', cost: 65, selected: false },
  { id: 'dinner', name: 'Dinner', cost: 70, selected: true }
];