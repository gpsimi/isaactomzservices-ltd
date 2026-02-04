import { CollectionConfig } from 'payload'

export const Messages: CollectionConfig = {
  slug: 'messages',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['ticketNumber', 'name', 'email', 'createdAt'],
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => false,
    delete: () => false,
  },
  fields: [
    {
      name: 'ticketNumber',
      type: 'text',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
  ],
  hooks: {
    beforeChange: [
      async ({ data, req, operation }) => {
        if (operation === 'create') {
            // Generate a simple ticket number if not present
            // In a real high-volume scenario, we might want a more robust sequence
            // For now, using a timestamp + random component or just letting Supabase/Postgres handle ID is common
            // But since we want a displayable "Ticket Number" string, let's generate one.
            // Actually, we can just use the ID if it's auto-incrementing integer, but Payload usually uses UUIDs or similar depending on DB.
            // Let's generate a random string or use the ID after creation? 
            // The prompt asked to "Use the ID that Supabase automatically assigns". 
            // In Payload + Postgres, IDs are often numeric or UUID. 
            // Let's rely on the ID for the ticket number in the email, but for the field in the DB, 
            // maybe we don't strictly *need* a separate ticketNumber field if ID suffices.
            // However, having a human-readable format like "TICKET-1234" is nice. 
            // Let's stick to using the `id` in the email as requested: "Ticket #1234".
            // So we don't necessarily need a pre-calculated ticketNumber field unless we want a custom format.
            // I'll add a 'ticketId' field that copies the ID for easy searching if needed, or just rely on ID.
            
            // Wait, the prompt said "Use the ID that Supabase automatically assigns to each new entry... Payload takes that number #105".
            // If Payload uses numeric IDs with Postgres, that works. If it uses UUIDs, "Ticket #UUID" is ugly.
            // Let's assume standard Payload behavior. 
            // I'll leave the hook to send email in `afterChange` which has the final `doc` with `id`.
        }
        return data;
      }
    ],
    afterChange: [
      async ({ doc, req, operation }) => {
        if (operation === 'create') {
          const ticketId = doc.id
          
          // 1. Send Admin Email
          try {
            await req.payload.sendEmail({
              to: 'isaactomzservicesltd@gmail.com',
              from: 'onboarding@resend.dev', // Ensure this matches payload.config.ts default or verified domain
              subject: `New Contact Message - Ticket #${ticketId}`,
              html: `
                <h1>New Contact Message</h1>
                <p><strong>Ticket ID:</strong> ${ticketId}</p>
                <p><strong>Name:</strong> ${doc.name}</p>
                <p><strong>Email:</strong> ${doc.email}</p>
                <p><strong>Phone:</strong> ${doc.phone || 'N/A'}</p>
                <p><strong>Message:</strong></p>
                <p>${doc.message}</p>
              `,
            })
          } catch (err) {
            console.error('Failed to send admin email', err)
          }

          // 2. Send User Email
          try {
            await req.payload.sendEmail({
              to: doc.email,
              from: 'onboarding@resend.dev',
              subject: `We received your message - Ticket #${ticketId}`,
              html: `
                <h1>Hello ${doc.name},</h1>
                <p>Thank you for contacting Isaac Tomz Services.</p>
                <p>We have received your message and created a support ticket for you.</p>
                <p><strong>Your Ticket Number:</strong> #${ticketId}</p>
                <p>We will get back to you shortly.</p>
                <br>
                <p>Best regards,</p>
                <p>Isaac Tomz Services Team</p>
              `,
            })
          } catch (err) {
            console.error('Failed to send user confirmation email', err)
          }
        }
      },
    ],
  },
}
