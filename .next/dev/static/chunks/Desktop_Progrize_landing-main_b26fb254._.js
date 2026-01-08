(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Progrize_landing-main/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/supabase-js/dist/esm/wrapper.mjs [app-client] (ecmascript)");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://jfjmpljeavukknfnrbwa.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impmam1wbGplYXZ1a2tuZm5yYndhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4NjA5ODYsImV4cCI6MjA4MTQzNjk4Nn0.Dc0rOSbzHtq6dtn-Rtg79Jk4DUSJe6RP49gp0r3KwCs");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VerifyRequestPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function VerifyRequestPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const token = searchParams.get("token");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [verificationDetails, setVerificationDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [processing, setProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rejectionReason, setRejectionReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showRejectionForm, setShowRejectionForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VerifyRequestPage.useEffect": ()=>{
            loadVerificationDetails();
        }
    }["VerifyRequestPage.useEffect"], [
        token
    ]);
    const loadVerificationDetails = async ()=>{
        if (!token) {
            setError("Invalid verification link");
            setLoading(false);
            return;
        }
        try {
            // Get verification request
            const { data: requestData, error: requestError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("verification_requests").select("*").eq("verification_token", token).single();
            if (requestError) throw requestError;
            if (requestData.status !== "pending") {
                setError(`This verification request has already been ${requestData.status}`);
                setLoading(false);
                return;
            }
            // Check if expired
            if (new Date(requestData.expires_at) < new Date()) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("verification_requests").update({
                    status: "expired"
                }).eq("id", requestData.id);
                setError("This verification link has expired");
                setLoading(false);
                return;
            }
            // Get user profile and email
            const { data: { user: authUser } } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.admin.getUserById(requestData.user_id);
            const { data: profileData } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("profiles").select("full_name").eq("id", requestData.user_id).single();
            // Get item details based on type
            let itemDetails;
            if (requestData.request_type === "experience") {
                const { data: expData } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("experiences").select("position, company_name, start_date, end_date, is_current, description").eq("id", requestData.reference_id).single();
                itemDetails = {
                    title: expData?.position || "",
                    organization: expData?.company_name || "",
                    start_date: expData?.start_date || "",
                    end_date: expData?.end_date,
                    is_current: expData?.is_current || false,
                    description: expData?.description
                };
            } else {
                const { data: eduData } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("education").select("degree, institution_name, start_date, end_date, is_current, description").eq("id", requestData.reference_id).single();
                itemDetails = {
                    title: eduData?.degree || "",
                    organization: eduData?.institution_name || "",
                    start_date: eduData?.start_date || "",
                    end_date: eduData?.end_date,
                    is_current: eduData?.is_current || false,
                    description: eduData?.description
                };
            }
            setVerificationDetails({
                ...requestData,
                user_name: profileData?.full_name || "Unknown User",
                user_email: authUser?.email || "",
                item_details: itemDetails
            });
        } catch (error) {
            console.error("Error loading verification details:", error);
            setError("Failed to load verification details");
        } finally{
            setLoading(false);
        }
    };
    const handleVerify = async ()=>{
        if (!verificationDetails) return;
        setProcessing(true);
        try {
            // Update verification request
            const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("verification_requests").update({
                status: "verified",
                verified_at: new Date().toISOString(),
                verified_by: verificationDetails.verifier_email
            }).eq("id", verificationDetails.id);
            if (updateError) throw updateError;
            // Update the experience or education record
            const tableName = verificationDetails.request_type === "experience" ? "experiences" : "education";
            const { error: itemUpdateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from(tableName).update({
                verified: true,
                verified_by: verificationDetails.verifier_email,
                verified_at: new Date().toISOString()
            }).eq("id", verificationDetails.reference_id);
            if (itemUpdateError) throw itemUpdateError;
            // Add to verification history
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("verification_history").insert({
                verification_request_id: verificationDetails.id,
                action: "verified",
                actor_email: verificationDetails.verifier_email,
                notes: "Verified successfully"
            });
            // Send notification email to user
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].functions.invoke("send-verification-notification", {
                    body: {
                        userEmail: verificationDetails.user_email,
                        userName: verificationDetails.user_name,
                        requestType: verificationDetails.request_type,
                        itemDetails: {
                            title: verificationDetails.item_details.title,
                            organization: verificationDetails.item_details.organization
                        },
                        status: "verified",
                        verifiedBy: verificationDetails.verifier_email
                    }
                });
            } catch (emailError) {
                console.error("Error sending notification email:", emailError);
            // Continue even if email fails
            }
            router.push("/verification-success");
        } catch (error) {
            console.error("Error verifying:", error);
            alert("Failed to verify. Please try again.");
        } finally{
            setProcessing(false);
        }
    };
    const handleReject = async ()=>{
        if (!verificationDetails) return;
        if (!rejectionReason.trim()) {
            alert("Please provide a reason for rejection");
            return;
        }
        setProcessing(true);
        try {
            // Update verification request
            const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("verification_requests").update({
                status: "rejected",
                verified_at: new Date().toISOString(),
                verified_by: verificationDetails.verifier_email,
                rejection_reason: rejectionReason
            }).eq("id", verificationDetails.id);
            if (updateError) throw updateError;
            // Add to verification history
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("verification_history").insert({
                verification_request_id: verificationDetails.id,
                action: "rejected",
                actor_email: verificationDetails.verifier_email,
                notes: rejectionReason
            });
            // Send notification email to user
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].functions.invoke("send-verification-notification", {
                    body: {
                        userEmail: verificationDetails.user_email,
                        userName: verificationDetails.user_name,
                        requestType: verificationDetails.request_type,
                        itemDetails: {
                            title: verificationDetails.item_details.title,
                            organization: verificationDetails.item_details.organization
                        },
                        status: "rejected",
                        verifiedBy: verificationDetails.verifier_email,
                        rejectionReason: rejectionReason
                    }
                });
            } catch (emailError) {
                console.error("Error sending notification email:", emailError);
            // Continue even if email fails
            }
            router.push("/verification-rejected");
        } catch (error) {
            console.error("Error rejecting:", error);
            alert("Failed to reject. Please try again.");
        } finally{
            setProcessing(false);
        }
    };
    const formatDate = (dateString)=>{
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-[#162f16] mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                        lineNumber: 273,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "Loading verification details..."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                        lineNumber: 274,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                lineNumber: 272,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
            lineNumber: 271,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-50 p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-8 h-8 text-red-600",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M6 18L18 6M6 6l12 12"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                lineNumber: 286,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                            lineNumber: 285,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                        lineNumber: 284,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold text-gray-900 mb-2",
                        children: "Verification Error"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                        lineNumber: 289,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                        lineNumber: 290,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                lineNumber: 283,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
            lineNumber: 282,
            columnNumber: 7
        }, this);
    }
    if (!verificationDetails) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 py-12 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl shadow-lg overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#162f16] text-white p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold mb-2",
                                    children: "Verification Request"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300",
                                    children: [
                                        verificationDetails.user_name,
                                        " has requested verification of their",
                                        " ",
                                        verificationDetails.request_type
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                    lineNumber: 305,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                            lineNumber: 303,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 rounded-lg p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-gray-900 mb-3",
                                            children: "Requester Information"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                            lineNumber: 315,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-600",
                                                            children: "Name:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-900 font-medium",
                                                            children: verificationDetails.user_name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                            lineNumber: 319,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-600",
                                                            children: "Request Date:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                            lineNumber: 322,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-900 font-medium",
                                                            children: formatDate(verificationDetails.created_at)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                            lineNumber: 323,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                            lineNumber: 316,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                    lineNumber: 314,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-gray-200 rounded-lg p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-gray-900 mb-3",
                                            children: [
                                                verificationDetails.request_type === "experience" ? "Experience" : "Education",
                                                " Details"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                            lineNumber: 332,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-sm text-gray-600",
                                                            children: verificationDetails.request_type === "experience" ? "Position:" : "Degree:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                            lineNumber: 337,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-900 font-medium",
                                                            children: verificationDetails.item_details.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                            lineNumber: 340,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-sm text-gray-600",
                                                            children: verificationDetails.request_type === "experience" ? "Company:" : "Institution:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                            lineNumber: 343,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-900 font-medium",
                                                            children: verificationDetails.item_details.organization
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-sm text-gray-600",
                                                            children: "Period:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                            lineNumber: 351,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-900 font-medium",
                                                            children: [
                                                                formatDate(verificationDetails.item_details.start_date),
                                                                " -",
                                                                " ",
                                                                verificationDetails.item_details.is_current ? "Present" : formatDate(verificationDetails.item_details.end_date || "")
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                            lineNumber: 352,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 17
                                                }, this),
                                                verificationDetails.item_details.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-sm text-gray-600",
                                                            children: "Description:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                            lineNumber: 361,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 text-sm mt-1",
                                                            children: verificationDetails.item_details.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                            lineNumber: 362,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                    lineNumber: 360,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                            lineNumber: 335,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                    lineNumber: 331,
                                    columnNumber: 13
                                }, this),
                                showRejectionForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-red-200 bg-red-50 rounded-lg p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-900 mb-2",
                                            children: "Reason for Rejection *"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                            lineNumber: 373,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: rejectionReason,
                                            onChange: (e)=>setRejectionReason(e.target.value),
                                            rows: 4,
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                            placeholder: "Please provide a detailed reason for rejecting this verification..."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                            lineNumber: 376,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                    lineNumber: 372,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-blue-50 border border-blue-200 rounded-lg p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                                                    clipRule: "evenodd"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                lineNumber: 389,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-blue-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium mb-1",
                                                        children: "Please verify the following:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "list-disc list-inside space-y-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "The person worked/studied at your organization"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                                lineNumber: 395,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "The position/degree title is accurate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                                lineNumber: 396,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "The dates are correct"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                                lineNumber: 397,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "All information matches your records"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                                lineNumber: 398,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                lineNumber: 392,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                        lineNumber: 388,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                    lineNumber: 387,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 pt-4",
                                    children: !showRejectionForm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowRejectionForm(true),
                                                disabled: processing,
                                                className: "flex-1 px-6 py-3 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition font-medium disabled:opacity-50",
                                                children: "Reject"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                lineNumber: 408,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleVerify,
                                                disabled: processing,
                                                className: "flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium disabled:opacity-50",
                                                children: processing ? "Processing..." : "Verify & Approve"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                lineNumber: 415,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setShowRejectionForm(false);
                                                    setRejectionReason("");
                                                },
                                                disabled: processing,
                                                className: "flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium disabled:opacity-50",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                lineNumber: 425,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleReject,
                                                disabled: processing || !rejectionReason.trim(),
                                                className: "flex-1 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium disabled:opacity-50",
                                                children: processing ? "Processing..." : "Confirm Rejection"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                                lineNumber: 435,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                                    lineNumber: 405,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                            lineNumber: 312,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                    lineNumber: 301,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-sm text-gray-500 mt-6",
                    children: [
                        "This verification link will expire on ",
                        formatDate(verificationDetails.expires_at || "")
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
                    lineNumber: 449,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
            lineNumber: 300,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Progrize_landing-main/app/components/VerifyRequestPage.tsx",
        lineNumber: 299,
        columnNumber: 5
    }, this);
}
_s(VerifyRequestPage, "jUm2NnQpYfuBzdLj+29HENZ8kbY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = VerifyRequestPage;
var _c;
__turbopack_context__.k.register(_c, "VerifyRequestPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Progrize_landing-main_b26fb254._.js.map