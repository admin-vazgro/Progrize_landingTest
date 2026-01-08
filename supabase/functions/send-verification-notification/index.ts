import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const APP_URL = Deno.env.get("APP_URL") || "http://localhost:3000";

interface NotificationRequest {
  userEmail: string;
  userName: string;
  requestType: "experience" | "education";
  itemDetails: {
    title: string;
    organization: string;
  };
  status: "verified" | "rejected";
  verifiedBy?: string;
  rejectionReason?: string;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const requestData: NotificationRequest = await req.json();
    const {
      userEmail,
      userName,
      requestType,
      itemDetails,
      status,
      verifiedBy,
      rejectionReason,
    } = requestData;

    const isVerified = status === "verified";
    const statusColor = isVerified ? "#10b981" : "#ef4444";
    const statusText = isVerified ? "Verified" : "Rejected";
    const statusIcon = isVerified ? "✓" : "✗";

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verification ${statusText} - Progrize</title>
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
              <p style="margin: 8px 0 0 0; color: #d4af37; font-size: 14px;">Verification Update</p>
            </td>
          </tr>
          
          <!-- Status Badge -->
          <tr>
            <td align="center" style="padding: 30px 30px 0 30px;">
              <div style="display: inline-block; background-color: ${statusColor}; color: #ffffff; padding: 12px 24px; border-radius: 50px; font-size: 16px; font-weight: 600;">
                ${statusIcon} ${statusText}
              </div>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 30px;">
              <h2 style="margin: 0 0 20px 0; color: #111827; font-size: 20px; font-weight: 600; text-align: center;">
                Your ${requestType === "experience" ? "Experience" : "Education"} Has Been ${statusText}
              </h2>
              
              <p style="margin: 0 0 20px 0; color: #4b5563; font-size: 16px; line-height: 1.5; text-align: center;">
                ${isVerified 
                  ? `Great news! Your ${requestType} information has been verified.`
                  : `Your ${requestType} verification request has been reviewed.`
                }
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
                      ${verifiedBy ? `
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">
                          Verified by:
                        </td>
                        <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 500;">
                          ${verifiedBy}
                        </td>
                      </tr>
                      ` : ''}
                    </table>
                  </td>
                </tr>
              </table>
              
              ${!isVerified && rejectionReason ? `
              <!-- Rejection Reason -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fef2f2; border-left: 4px solid #ef4444; margin: 20px 0;">
                <tr>
                  <td style="padding: 16px;">
                    <p style="margin: 0 0 8px 0; color: #991b1b; font-size: 14px; font-weight: 600;">
                      Reason for Rejection:
                    </p>
                    <p style="margin: 0; color: #7f1d1d; font-size: 13px; line-height: 1.6;">
                      ${rejectionReason}
                    </p>
                  </td>
                </tr>
              </table>
              ` : ''}
              
              ${isVerified ? `
              <!-- Success Info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0fdf4; border-left: 4px solid #10b981; margin: 20px 0;">
                <tr>
                  <td style="padding: 16px;">
                    <p style="margin: 0; color: #065f46; font-size: 13px; line-height: 1.6;">
                      A verification badge will now appear on your profile for this ${requestType}. This helps build trust with potential employers and connections.
                    </p>
                  </td>
                </tr>
              </table>
              ` : ''}
              
              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                <tr>
                  <td align="center">
                    <a href="${APP_URL}/profile" style="display: inline-block; background-color: #162f16; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-size: 16px; font-weight: 600;">
                      View Your Profile
                    </a>
                  </td>
                </tr>
              </table>
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
        from: "Progrize <noreply@progrize.com>",
        to: [userEmail],
        subject: `Your ${requestType === "experience" ? "Experience" : "Education"} Has Been ${statusText} - Progrize`,
        html: emailHtml,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json();
      throw new Error(`Resend API error: ${JSON.stringify(errorData)}`);
    }

    const resendData = await resendResponse.json();

    return new Response(
      JSON.stringify({
        success: true,
        message: "Notification email sent successfully",
        emailId: resendData.id,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error sending notification email:", error);
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