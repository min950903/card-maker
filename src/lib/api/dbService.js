import firebaseApp from './firebase';

class DbService {
  getCards(userId, onUpdate) {
    const ref = firebaseApp.database().ref(`${userId}/cards`);
    ref.on('value', (snapshot) => {
      const cards = snapshot.val();
      cards && onUpdate(cards);
    });

    return () => ref.off();
  }

  addOrUpdateCard(userId, card) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
  }

  deleteCard(userId, card) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
  }
}
export default DbService;
