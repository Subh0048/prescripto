import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Calendar, Plus, Trash2, Save } from "lucide-react";

export default function DoctorForm() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting, isDirty },
    reset,
  } = useForm({
    defaultValues: {
      personalInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        gender: "",
      },
      professionalInfo: {
        specialization: "",
        licenseNumber: "",
        yearsOfExperience: "",
        education: "",
        consultationFee: "",
      },
      availability: {
        workingDays: [],
        startTime: "",
        endTime: "",
      },
      languages: [""],
      emergencyContact: {
        name: "",
        relationship: "",
        phone: "",
      },
      bio: "",
      acceptTerms: false,
    },
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "languages",
  });

  console.log(fields, errors);

  const watchSpecialization = watch("professionalInfo.specialization");

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Data:", data);
    alert("Doctor registered successfully! Check console for data.");
  };

  const specializations = [
    "Cardiology",
    "Dermatology",
    "Pediatrics",
    "Orthopedics",
    "Neurology",
    "Psychiatry",
    "General Practice",
    "Surgery",
  ];

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="min-h-screen px-4 py-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl p-8 mx-auto bg-white shadow-xl rounded-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-indigo-600 rounded-lg">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Add New Doctor</h1>
            <p className="text-gray-600">
              Complete the form to register a doctor
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Personal Information */}
          <section className="pb-6 border-b">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  First Name *
                </label>
                <input
                  {...register("personalInfo.firstName", {
                    required: "First name is required",
                    minLength: { value: 2, message: "Minimum 2 characters" },
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: "Only letters allowed",
                    },
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="John"
                />
                {errors.personalInfo?.firstName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.personalInfo.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Last Name *
                </label>
                <input
                  {...register("personalInfo.lastName", {
                    required: "Last name is required",
                    minLength: { value: 2, message: "Minimum 2 characters" },
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Doe"
                />
                {errors.personalInfo?.lastName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.personalInfo.lastName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  {...register("personalInfo.email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full py-2 border border-gray-300 rounded-lg p x-4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="john.doe@hospital.com"
                />
                {errors.personalInfo?.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.personalInfo.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Phone *
                </label>
                <input
                  {...register("personalInfo.phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Must be 10 digits",
                    },
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="9876543210"
                />
                {errors.personalInfo?.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.personalInfo.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  {...register("personalInfo.dateOfBirth", {
                    required: "Date of birth is required",
                    validate: (value) => {
                      const age =
                        new Date().getFullYear() -
                        new Date(value).getFullYear();
                      return (
                        age >= 25 || "Doctor must be at least 25 years old"
                      );
                    },
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                {errors.personalInfo?.dateOfBirth && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.personalInfo.dateOfBirth.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Gender *
                </label>
                <select
                  {...register("personalInfo.gender", {
                    required: "Gender is required",
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.personalInfo?.gender && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.personalInfo.gender.message}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Professional Information */}
          <section className="pb-6 border-b">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Professional Information
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Specialization *
                </label>
                <select
                  {...register("professionalInfo.specialization", {
                    required: "Specialization is required",
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select Specialization</option>
                  {specializations.map((spec) => (
                    <option key={spec} value={spec}>
                      {spec}
                    </option>
                  ))}
                </select>
                {errors.professionalInfo?.specialization && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.professionalInfo.specialization.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  License Number *
                </label>
                <input
                  {...register("professionalInfo.licenseNumber", {
                    required: "License number is required",
                    pattern: {
                      value: /^[A-Z0-9]{6,12}$/,
                      message: "Must be 6-12 alphanumeric characters",
                    },
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="ABC123456"
                />
                {errors.professionalInfo?.licenseNumber && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.professionalInfo.licenseNumber.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Years of Experience *
                </label>
                <input
                  type="number"
                  {...register("professionalInfo.yearsOfExperience", {
                    required: "Experience is required",
                    min: { value: 0, message: "Cannot be negative" },
                    max: { value: 50, message: "Maximum 50 years" },
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="5"
                />
                {errors.professionalInfo?.yearsOfExperience && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.professionalInfo.yearsOfExperience.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Consultation Fee (₹) *
                </label>
                <input
                  type="number"
                  {...register("professionalInfo.consultationFee", {
                    required: "Fee is required",
                    min: { value: 100, message: "Minimum ₹100" },
                    max: { value: 10000, message: "Maximum ₹10000" },
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="500"
                />
                {errors.professionalInfo?.consultationFee && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.professionalInfo.consultationFee.message}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Education *
                </label>
                <input
                  {...register("professionalInfo.education", {
                    required: "Education is required",
                    minLength: { value: 5, message: "Minimum 5 characters" },
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="MBBS, MD - Cardiology"
                />
                {errors.professionalInfo?.education && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.professionalInfo.education.message}
                  </p>
                )}
              </div>
            </div>

            {watchSpecialization === "Surgery" && (
              <div className="p-4 mt-4 border border-yellow-200 rounded-lg bg-yellow-50">
                <p className="text-sm text-yellow-800">
                  ⚠️ Surgery specialization requires additional certification
                  documents
                </p>
              </div>
            )}
          </section>

          {/* Languages Spoken */}
          <section className="pb-6 border-b">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Languages Spoken
            </h2>
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-2 mb-3">
                <input
                  className="w-4 w-full h-4 border border-gray-300 rounded outline-none focus:ring-indigo-500"
                  type="text"
                  {...register(`language${index}`)}
                />
              </div>
            ))}

            <button
              type="button"
              onClick={() => append("")}
              className="flex items-center gap-2 px-4 py-2 text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
            >
              <Plus className="w-4 h-4" />
              Add Language
            </button>
          </section>

          {/* Availability */}
          <section className="pb-6 border-b">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Availability
            </h2>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Working Days *
              </label>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                {daysOfWeek.map((day) => (
                  <label
                    key={day}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={day}
                      {...register("availability.workingDays", {
                        required: "Select at least one working day",
                      })}
                      className="w-full px-4 py-2 border-gray-300 rouned px-text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="text-sm text-gray-700">{day}</span>
                  </label>
                ))}
              </div>
              {errors.availability?.workingDays && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.availability.workingDays.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Start Time *
                </label>
                <input
                  type="time"
                  {...register("availability.startTime", {
                    required: "Start time is required",
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                {errors.availability?.startTime && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.availability.startTime.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  End Time *
                </label>
                <input
                  type="time"
                  {...register("availability.endTime", {
                    required: "End time is required",
                    validate: (value) => {
                      const start = watch("availability.startTime");
                      return (
                        !start ||
                        value > start ||
                        "End time must be after start time"
                      );
                    },
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                {errors.availability?.endTime && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.availability.endTime.message}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Emergency Contact */}
          <section className="pb-6 border-b">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Emergency Contact
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Contact Name *
                </label>
                <input
                  {...register("emergencyContact.name", {
                    required: "Emergency contact name is required",
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Jane Doe"
                />
                {errors.emergencyContact?.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.emergencyContact.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Relationship *
                </label>
                <input
                  {...register("emergencyContact.relationship", {
                    required: "Relationship is required",
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Spouse"
                />
                {errors.emergencyContact?.relationship && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.emergencyContact.relationship.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Contact Phone *
                </label>
                <input
                  {...register("emergencyContact.phone", {
                    required: "Emergency phone is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Must be 10 digits",
                    },
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="9876543210"
                />
                {errors.emergencyContact?.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.emergencyContact.phone.message}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Bio */}
          <section className="pb-6 border-b">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Biography
            </h2>
            <textarea
              {...register("bio", {
                required: "Bio is required",
                minLength: { value: 50, message: "Minimum 50 characters" },
                maxLength: { value: 500, message: "Maximum 500 characters" },
              })}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Write a brief biography about the doctor..."
            />
            {errors.bio && (
              <p className="mt-1 text-sm text-red-500">{errors.bio.message}</p>
            )}
            <p className="mt-1 text-sm text-gray-500">
              {watch("bio")?.length || 0} / 500 characters
            </p>
          </section>

          {/* Terms */}
          <section>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                {...register("acceptTerms", {
                  required: "You must accept the terms and conditions",
                })}
                className="w-5 h-5 mt-1 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700">
                I confirm that all information provided is accurate and I accept
                the terms and conditions *
              </span>
            </label>
            {errors.acceptTerms && (
              <p className="mt-1 text-sm text-red-500">
                {errors.acceptTerms.message}
              </p>
            )}
          </section>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className="flex items-center justify-center flex-1 gap-2 px-6 py-3 text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>Processing...</>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  Register Doctor
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => reset()}
              className="px-6 py-3 text-gray-700 transition bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Reset Form
            </button>
          </div>

          {isDirty && (
            <p className="text-sm text-center text-amber-600">
              You have unsaved changes
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
