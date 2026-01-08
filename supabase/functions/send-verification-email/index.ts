import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const APP_URL = Deno.env.get("APP_URL") || "http://localhost:3000";

interface VerificationEmailRequest {
  verificationRequestId: string;
  verifierEmail: string;
  userName: string;
  message?: string;
  requestType: "experience" | "education";
  itemDetails: {
    title: string;
    organization: string;
    startDate: string;
    endDate?: string;
    isCurrent: boolean;
  };
  verificationToken: string;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);

    const requestData: VerificationEmailRequest = await req.json();
    const {
      verificationRequestId,
      verifierEmail,
      userName,
      message,
      requestType,
      itemDetails,
      verificationToken,
    } = requestData;

    // Construct verification URL
    const verificationUrl = `${APP_URL}/verify?token=${verificationToken}`;

    // Format dates
    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
    };

    const startDate = formatDate(itemDetails.startDate);
    const endDate = itemDetails.isCurrent ? "Present" : formatDate(itemDetails.endDate || "");

    // Create email HTML
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verification Request - Progrize</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: #162f16; padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">Progrize</h1>
              <p style="margin: 8px 0 0 0; color: #d4af37; font-size: 14px;">Professional Verification Request</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="margin: 0 0 20px 0; color: #111827; font-size: 20px; font-weight: 600;">
                Verification Request from ${userName}
              </h2>
              
              <p style="margin: 0 0 20px 0; color: #4b5563; font-size: 16px; line-height: 1.5;">
                You have received a request to verify ${requestType === "experience" ? "employment" : "education"} information for <strong>${userName}</strong>.
              </p>
              
              <!-- Details Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; margin: 20px 0;">
                <tr>
                  <td style="padding: 20px;">
                    <h3 style="margin: 0 0 15px 0; color: #111827; font-size: 16px; font-weight: 600;">
                      ${requestType === "experience" ? "Experience" : "Education"} Details
                    </h3>
                    
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 140px;">
                          ${requestType === "experience" ? "Position:" : "Degree:"}
                        </td>
                        <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 500;">
                          ${itemDetails.title}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">
                          ${requestType === "experience" ? "Company:" : "Institution:"}
                        </td>
                        <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 500;">
                          ${itemDetails.organization}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">
                          Period:
                        </td>
                        <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 500;">
                          ${startDate} - ${endDate}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              ${message ? `
              <!-- Message -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 6px; margin: 20px 0;">
                <tr>
                  <td style="padding: 16px;">
                    <p style="margin: 0 0 6px 0; color: #111827; font-size: 14px; font-weight: 600;">
                      Additional message
                    </p>
                    <p style="margin: 0; color: #4b5563; font-size: 14px; line-height: 1.5;">
                      ${message.replace(/\n/g, "<br />")}
                    </p>
                  </td>
                </tr>
              </table>
              ` : ""}

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                <tr>
                  <td align="center">
                    <a href="${verificationUrl}" style="display: inline-block; background-color: #162f16; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-size: 16px; font-weight: 600;">
                      Review & Verify
                    </a>
                  </td>
                </tr>
              </table>
              
              <!-- Info Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #eff6ff; border-left: 4px solid #3b82f6; margin: 20px 0;">
                <tr>
                  <td style="padding: 16px;">
                    <p style="margin: 0 0 8px 0; color: #1e40af; font-size: 14px; font-weight: 600;">
                      What happens next?
                    </p>
                    <ul style="margin: 0; padding-left: 20px; color: #1e3a8a; font-size: 13px; line-height: 1.6;">
                      <li>Click the button above to review the details</li>
                      <li>Verify if the information is accurate</li>
                      <li>Approve or reject the verification request</li>
                      <li>The user will be notified of your decision</li>
                    </ul>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 20px 0 0 0; color: #6b7280; font-size: 13px; line-height: 1.5;">
                This verification link will expire in 30 days. If you did not expect this email or believe it was sent in error, you can safely ignore it.
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 20px 30px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280; font-size: 12px; text-align: center;">
                © 2024 Progrize. All rights reserved.
              </p>
              <p style="margin: 8px 0 0 0; color: #9ca3af; font-size: 11px; text-align: center;">
                This is an automated email. Please do not reply to this message.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Send email using Resend
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Progrize Verification <noreply@progrize.com>",
        to: [verifierEmail],
        subject: `Verification Request from ${userName} - Progrize`,
        html: emailHtml,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json();
      throw new Error(`Resend API error: ${JSON.stringify(errorData)}`);
    }

    const resendData = await resendResponse.json();

    // Log the email send in verification_history
    await supabase.from("verification_history").insert({
      verification_request_id: verificationRequestId,
      action: "email_sent",
      actor_email: verifierEmail,
      notes: `Verification email sent successfully. Email ID: ${resendData.id}`,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Verification email sent successfully",
        emailId: resendData.id,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error sending verification email:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
