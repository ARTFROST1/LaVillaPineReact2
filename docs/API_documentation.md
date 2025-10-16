# La Villa Pine - API Documentation

## Overview
This document provides comprehensive documentation for all API endpoints in the La Villa Pine application. All endpoints are RESTful and return JSON responses.

**Base URL**: `https://lavillapine.onrender.com/api`  
**Development**: `http://localhost:5000/api`

---

## Table of Contents
1. [Contact Endpoints](#contact-endpoints)
2. [Configuration Endpoints](#configuration-endpoints)
3. [SEO Endpoints](#seo-endpoints)
4. [Error Handling](#error-handling)
5. [Response Formats](#response-formats)

---

## Authentication
Currently, the API does not require authentication for public endpoints. Admin endpoints (if implemented) would require session-based authentication.

---

## Contact Endpoints

### POST /api/contact
Submit a contact form message.

**Description**: Accepts contact form submissions, saves them to the database, and sends notifications via multiple channels (email, Telegram, etc.).

**Request Body**:
```json
{
  "name": "string (required, min 1 char)",
  "phone": "string (required, min 1 char)",
  "message": "string (required, min 1 char)"
}
```

**Example Request**:
```bash
curl -X POST https://lavillapine.onrender.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Иван Петров",
    "phone": "+7 (999) 123-45-67",
    "message": "Хочу забронировать домик на выходные"
  }'
```

**Success Response** (200 OK):
```json
{
  "success": true,
  "message": "Сообщение отправлено на lavillapine@yandex.com через SMTP, Telegram!",
  "id": 42
}
```

**Success Response (Partial)** (200 OK):
```json
{
  "success": true,
  "message": "Сообщение сохранено в базе данных. Проверьте настройки email или Telegram для уведомлений.",
  "id": 42
}
```

**Error Response** (400 Bad Request):
```json
{
  "success": false,
  "message": "Неверные данные формы",
  "errors": [
    {
      "path": ["name"],
      "message": "Required"
    }
  ]
}
```

**Error Response** (500 Internal Server Error):
```json
{
  "success": false,
  "message": "Не удалось отправить сообщение"
}
```

**Notification Channels** (attempted in parallel):
- ✅ SMTP (Nodemailer via Yandex)
- ✅ Telegram Bot
- ✅ EmailJS
- ✅ Formspree
- ✅ FormSubmit
- ✅ Submit Form (webhook)
- ✅ Netlify Forms

**Validation Rules**:
- `name`: Required, non-empty string
- `phone`: Required, non-empty string (no format validation)
- `message`: Required, non-empty string

**Notes**:
- At least one notification method must succeed
- Message is always saved to database regardless of notification success
- All notification methods are attempted in parallel for redundancy

---

### GET /api/contact-messages
Retrieve all contact messages (admin endpoint).

**Description**: Fetches all contact form submissions from the database, ordered by creation date (newest first).

**Request**: No body required.

**Example Request**:
```bash
curl https://lavillapine.onrender.com/api/contact-messages
```

**Success Response** (200 OK):
```json
[
  {
    "id": 42,
    "name": "Иван Петров",
    "phone": "+7 (999) 123-45-67",
    "message": "Хочу забронировать домик на выходные",
    "createdAt": "2024-01-15T10:30:00.000Z"
  },
  {
    "id": 41,
    "name": "Мария Сидорова",
    "phone": "+7 (999) 987-65-43",
    "message": "Какие есть удобства?",
    "createdAt": "2024-01-14T15:20:00.000Z"
  }
]
```

**Error Response** (500 Internal Server Error):
```json
{
  "success": false,
  "message": "Failed to fetch messages"
}
```

**Notes**:
- Returns empty array `[]` if no messages exist
- No pagination currently implemented

---

## Configuration Endpoints

### GET /api/yandex-maps-key
Get Yandex Maps API key for client-side usage.

**Description**: Returns the Yandex Maps API key required for rendering maps on the client side.

**Request**: No body required.

**Example Request**:
```bash
curl https://lavillapine.onrender.com/api/yandex-maps-key
```

**Success Response** (200 OK):
```json
{
  "apiKey": "4b29ea94-0ed2-46d8-920e-632c0edc4864"
}
```

**Error Response** (500 Internal Server Error):
```json
{
  "success": false,
  "message": "Failed to get API key"
}
```

**Notes**:
- Falls back to hardcoded key if `YANDEX_MAPS_API_KEY` environment variable is not set
- API key is safe to expose on client side (restricted by domain)

---

## SEO Endpoints

### POST /api/indexnow
Notify search engines about URL updates via IndexNow protocol.

**Description**: Sends bulk URL notifications to search engines (Yandex, Bing) for instant indexing.

**Request Body**:
```json
{
  "urls": [
    "string (array of absolute URLs)"
  ]
}
```

**Example Request**:
```bash
curl -X POST https://lavillapine.onrender.com/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{
    "urls": [
      "https://lavillapine.onrender.com/",
      "https://lavillapine.onrender.com/gallery",
      "https://lavillapine.onrender.com/contacts"
    ]
  }'
```

**Success Response** (200 OK):
```json
{
  "success": true,
  "message": "IndexNow уведомления отправлены для 3 URL"
}
```

**Error Response** (400 Bad Request):
```json
{
  "success": false,
  "message": "URLs array is required"
}
```

**Error Response** (400 Bad Request - Invalid URL):
```json
{
  "success": false,
  "message": "Недопустимый URL: https://example.com/. Только URL сайта lavillapine.onrender.com разрешены."
}
```

**Error Response** (500 Internal Server Error):
```json
{
  "success": false,
  "message": "Не удалось отправить IndexNow уведомления"
}
```

**Validation Rules**:
- `urls` must be an array
- Each URL must start with `https://lavillapine.onrender.com/`
- Prevents notifying external URLs

**Notes**:
- Notifies both Yandex and Bing search engines
- Uses IndexNow protocol for instant indexing
- Requires valid `indexnow-key.txt` in public directory

---

### POST /api/indexnow/single
Notify search engines about a single URL update.

**Description**: Sends a single URL notification to search engines via IndexNow protocol.

**Request Body**:
```json
{
  "url": "string (absolute URL)"
}
```

**Example Request**:
```bash
curl -X POST https://lavillapine.onrender.com/api/indexnow/single \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://lavillapine.onrender.com/gallery"
  }'
```

**Success Response** (200 OK):
```json
{
  "success": true,
  "message": "IndexNow уведомление отправлено для https://lavillapine.onrender.com/gallery"
}
```

**Error Response** (400 Bad Request):
```json
{
  "success": false,
  "message": "URL is required"
}
```

**Error Response** (400 Bad Request - Invalid URL):
```json
{
  "success": false,
  "message": "Недопустимый URL: https://example.com/. Только URL сайта lavillapine.onrender.com разрешены."
}
```

**Error Response** (500 Internal Server Error):
```json
{
  "success": false,
  "message": "Не удалось отправить IndexNow уведомление"
}
```

**Notes**:
- Preferred method for single URL updates
- Same validation as bulk endpoint

---

### POST /api/indexnow/all
Notify search engines about all site pages.

**Description**: Sends notifications for all predefined site URLs (homepage, gallery, contacts, etc.).

**Request**: No body required.

**Example Request**:
```bash
curl -X POST https://lavillapine.onrender.com/api/indexnow/all
```

**Success Response** (200 OK):
```json
{
  "success": true,
  "message": "IndexNow уведомления отправлены для всех страниц сайта (11 URL)"
}
```

**Error Response** (500 Internal Server Error):
```json
{
  "success": false,
  "message": "Не удалось отправить IndexNow уведомления для всех страниц"
}
```

**URLs Included**:
```
https://lavillapine.onrender.com/
https://lavillapine.onrender.com/about
https://lavillapine.onrender.com/gallery
https://lavillapine.onrender.com/contacts
https://lavillapine.onrender.com/booking
https://lavillapine.onrender.com/rules
https://lavillapine.onrender.com/privacy-policy
https://lavillapine.onrender.com/consent
https://lavillapine.onrender.com/legal-documents
```

**Notes**:
- Useful after major site updates
- Triggers bulk indexing for all pages

---

### GET /api/indexnow/key
Get IndexNow verification key.

**Description**: Returns the IndexNow key for verification purposes.

**Request**: No body required.

**Example Request**:
```bash
curl https://lavillapine.onrender.com/api/indexnow/key
```

**Success Response** (200 OK):
```json
{
  "key": "your-indexnow-key-here",
  "isValid": true,
  "keyLocation": "https://lavillapine.onrender.com/indexnow-key.txt"
}
```

**Error Response** (500 Internal Server Error):
```json
{
  "success": false,
  "message": "Failed to get IndexNow key"
}
```

**Notes**:
- Key must be accessible at `/indexnow-key.txt`
- Used by search engines to verify ownership

---

### GET /api/indexnow/validate
Validate IndexNow key configuration.

**Description**: Checks if the IndexNow key is properly configured and accessible.

**Request**: No body required.

**Example Request**:
```bash
curl https://lavillapine.onrender.com/api/indexnow/validate
```

**Success Response** (200 OK):
```json
{
  "success": true,
  "keyValid": true,
  "keyAccessible": true,
  "keyMatches": true,
  "message": "Ключ IndexNow настроен корректно"
}
```

**Partial Success** (200 OK):
```json
{
  "success": true,
  "keyValid": true,
  "keyAccessible": false,
  "keyMatches": false,
  "message": "Ключ IndexNow требует проверки"
}
```

**Error Response** (500 Internal Server Error):
```json
{
  "success": false,
  "message": "Ошибка при проверке ключа IndexNow"
}
```

**Validation Checks**:
1. ✅ Key format is valid (32-64 hex characters)
2. ✅ Key file is accessible at `/indexnow-key.txt`
3. ✅ File content matches server key

---

### POST /api/sitemap/update
Update sitemap with current date.

**Description**: Regenerates the sitemap.xml file with updated timestamps.

**Request**: No body required.

**Example Request**:
```bash
curl -X POST https://lavillapine.onrender.com/api/sitemap/update
```

**Success Response** (200 OK):
```json
{
  "success": true,
  "message": "Sitemap обновлен успешно"
}
```

**Error Response** (500 Internal Server Error):
```json
{
  "success": false,
  "message": "Не удалось обновить sitemap"
}
```

**Notes**:
- Updates `<lastmod>` dates for all URLs
- Sitemap location: `/public/sitemap.xml`

---

### POST /api/seo/update-all
Update sitemap and notify search engines in one operation.

**Description**: Combines sitemap update and IndexNow notifications for all pages.

**Request**: No body required.

**Example Request**:
```bash
curl -X POST https://lavillapine.onrender.com/api/seo/update-all
```

**Success Response** (200 OK):
```json
{
  "success": true,
  "message": "Sitemap обновлен и IndexNow уведомления отправлены для 11 URL"
}
```

**Partial Success** (200 OK):
```json
{
  "success": true,
  "message": "Sitemap обновлен, но не удалось отправить IndexNow уведомления"
}
```

**Error Response** (500 Internal Server Error):
```json
{
  "success": false,
  "message": "Не удалось обновить sitemap и отправить IndexNow уведомления"
}
```

**Process**:
1. Update sitemap.xml
2. Notify Yandex via IndexNow
3. Notify Bing via IndexNow

**Notes**:
- Recommended after content updates
- Ensures search engines have latest information

---

## Error Handling

### Standard Error Response Format

All error responses follow this structure:

```json
{
  "success": false,
  "message": "Human-readable error message",
  "errors": [
    // Optional: detailed validation errors (Zod)
  ]
}
```

### HTTP Status Codes

| Code | Meaning | When Used |
|------|---------|-----------|
| 200 | OK | Successful request |
| 400 | Bad Request | Invalid input data, validation errors |
| 404 | Not Found | Invalid route (non-API routes) |
| 500 | Internal Server Error | Server-side errors, database issues |

### Common Error Scenarios

#### 1. Validation Error (400)
```json
{
  "success": false,
  "message": "Неверные данные формы",
  "errors": [
    {
      "path": ["phone"],
      "message": "Required"
    }
  ]
}
```

#### 2. Database Error (500)
```json
{
  "success": false,
  "message": "Failed to fetch messages"
}
```

#### 3. External Service Error (500)
```json
{
  "success": false,
  "message": "Не удалось отправить сообщение"
}
```

---

## Response Formats

### Success Response Structure

#### Standard Success
```json
{
  "success": true,
  "message": "Descriptive success message"
}
```

#### Success with Data
```json
{
  "success": true,
  "message": "Optional message",
  "data": { /* response data */ }
}
```

#### Success with ID
```json
{
  "success": true,
  "message": "Resource created",
  "id": 42
}
```

---

## Rate Limiting

**Current Status**: No rate limiting implemented

**Future Considerations**:
- Contact form: Max 5 submissions per IP per hour
- IndexNow: Max 100 URLs per request
- Admin endpoints: Require authentication

---

## CORS Configuration

**Current Status**: Same-origin only

**Allowed Origins**:
- `https://lavillapine.onrender.com`
- `http://localhost:5000` (development)

---

## Request Examples

### JavaScript (Fetch API)

```javascript
// Contact form submission
async function submitContact(formData) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  
  const result = await response.json();
  
  if (result.success) {
    console.log('Message sent:', result.message);
  } else {
    console.error('Error:', result.message);
  }
}

// Get Yandex Maps API key
async function getMapKey() {
  const response = await fetch('/api/yandex-maps-key');
  const { apiKey } = await response.json();
  return apiKey;
}

// Notify IndexNow about page update
async function notifySearchEngines(url) {
  const response = await fetch('/api/indexnow/single', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  });
  
  return response.json();
}
```

### React Query (TanStack Query)

```typescript
import { useMutation, useQuery } from '@tanstack/react-query';

// Contact form mutation
const useContactForm = () => {
  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) throw new Error('Failed to send message');
      return response.json();
    },
  });
};

// Get messages query
const useContactMessages = () => {
  return useQuery({
    queryKey: ['contact-messages'],
    queryFn: async () => {
      const response = await fetch('/api/contact-messages');
      if (!response.ok) throw new Error('Failed to fetch messages');
      return response.json();
    },
  });
};
```

---

## Webhook Integration

### Email Service Webhooks

The application uses multiple webhook-based email services as fallbacks:

1. **FormSubmit**: `https://formsubmit.co/ajax/{email}`
2. **Submit Form**: `https://submit-form.com/...`
3. **Netlify Forms**: Form submission via `x-www-form-urlencoded`

These are internal implementations not exposed as API endpoints.

---

## IndexNow Protocol Details

### Request Format to Search Engines

```json
{
  "host": "lavillapine.onrender.com",
  "key": "your-indexnow-key",
  "keyLocation": "https://lavillapine.onrender.com/indexnow-key.txt",
  "urlList": [
    "https://lavillapine.onrender.com/",
    "https://lavillapine.onrender.com/gallery"
  ]
}
```

### Search Engine Endpoints

- **Yandex**: `https://yandex.com/indexnow`
- **Bing**: `https://www.bing.com/indexnow`

---

## Database Schema Reference

### contact_messages Table

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | SERIAL | PRIMARY KEY | Auto-incrementing ID |
| name | TEXT | NOT NULL | Contact name |
| phone | TEXT | NOT NULL | Contact phone |
| message | TEXT | NOT NULL | Message content |
| created_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | Creation timestamp |

---

## API Versioning

**Current Version**: v1 (implicit, no version in URL)

**Future Versioning Strategy**:
- `/api/v2/...` for breaking changes
- Maintain v1 for backwards compatibility

---

## Testing Endpoints

### Development Tools

```bash
# Test contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","phone":"123","message":"Test message"}'

# Test IndexNow validation
curl http://localhost:5000/api/indexnow/validate

# Test SEO update
curl -X POST http://localhost:5000/api/seo/update-all
```

---

## Security Considerations

### Current Security Measures

✅ Input validation (Zod schemas)
✅ SQL injection prevention (Drizzle ORM)
✅ URL validation (IndexNow endpoints)
✅ Environment variable protection
✅ HTTPS enforcement (production)

### Future Enhancements

- [ ] Rate limiting
- [ ] API authentication for admin endpoints
- [ ] CSRF protection
- [ ] Request logging and monitoring
- [ ] IP-based blocking for abuse

---

## Monitoring & Logging

### Server Logs

All API requests are logged with:
- HTTP method
- Path
- Status code
- Response time
- Response body (truncated to 80 chars)

Example log:
```
POST /api/contact 200 in 245ms :: {"success":true,"message":"Сообщение от...
GET /api/contact-messages 200 in 12ms :: [{"id":42,"name":"Иван Петр...
```

---

## Summary

The La Villa Pine API provides:

✅ **Contact Management**: Form submission and retrieval
✅ **Configuration**: API keys for external services
✅ **SEO Tools**: IndexNow protocol, sitemap management
✅ **Error Handling**: Consistent error responses
✅ **Multiple Fallbacks**: Redundant notification channels
✅ **Type Safety**: Zod validation on all inputs
✅ **Simple Integration**: RESTful JSON API

**Total Endpoints**: 10  
**Authentication**: Not required (public endpoints)  
**Response Format**: JSON  
**Content Type**: `application/json`
