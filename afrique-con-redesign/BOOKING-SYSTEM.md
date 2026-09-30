# Système de réservation Afrique-con

## Variables d'environnement requises

Configurez ces variables dans les paramètres Netlify (Site configuration > Environment variables):

### Production

```
ADMIN_PASSWORD=VotreMotDePasseSecurise
```

**Important**: Changez le mot de passe par défaut avant le déploiement en production.

## Architecture

### Pages

- `/reserver` - Flow de réservation en 4 étapes
- `/ma-reservation` - Recherche de réservation par numéro + téléphone
- `/admin` - Interface admin protégée par mot de passe
- `/horaires` - Horaires et prix de tous les trajets
- `/faq` - Questions fréquentes
- `/agences` - Liste des agences avec localisation

### API Routes

- `POST /api/bookings` - Créer une réservation
- `GET /api/bookings?number=XX&phone=YY` - Récupérer une réservation
- `GET /api/admin/bookings` - Lister toutes les réservations (auth requise)
- `PATCH /api/admin/bookings` - Mettre à jour le statut (auth requise)

### Stockage

Les réservations sont stockées dans Netlify Blobs (store `bookings`), avec le numéro de réservation comme clé.

Format des numéros: `AC-XXXXXX` (6 chiffres aléatoires)

### Paiement

Le site affiche les options de paiement:
- En agence (espèces)
- Orange Money
- MTN Mobile Money

Numéros de paiement: +237 678 197 361

Le code est structuré pour permettre l'intégration future de:
- CinetPay
- Campay
- Notch Pay

### Notifications

- WhatsApp: bouton pour envoyer le récapitulatif à l'agence
- Email: structure prête (nécessite service SMTP ou API email)

### Admin

Authentification basique par mot de passe (variable d'environnement).

Fonctionnalités:
- Liste de toutes les réservations
- Filtres par statut (en attente, confirmée, payée, annulée)
- Changement de statut en un clic
- Export CSV

## Déploiement

1. Configurer `ADMIN_PASSWORD` dans Netlify
2. Déployer normalement
3. Netlify Blobs est automatiquement disponible
4. Tester le flow complet sur le site déployé

## Sécurité

- Authentification admin par Bearer token
- Validation téléphone pour accès aux réservations
- Pas d'informations sensibles exposées dans les URLs
- Rate limiting recommandé (à configurer dans Netlify)

## Tests locaux

Pour tester localement avec Netlify Blobs:

```bash
npx netlify dev
```

Cela démarre le serveur local avec accès aux Netlify Blobs.
