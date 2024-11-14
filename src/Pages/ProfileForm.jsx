import {  Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useForm, Controller } from "react-hook-form";

function ProfileForm() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            age: ''
        }
    });

    const onSubmit = (data) => console.log(data);

    return (

            <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto rounded-lg shadow p-8">
                <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <TextField
                            fullWidth
                            id="filled-basic"
                            label="First Name"
                            variant="filled"
                            error={!!errors.FirstName}
                            helperText={errors.FirstName?.message}
                            {...register("FirstName", {
                                required: "First name is required",
                                pattern: {
                                    value: /^[A-Za-z]+$/,
                                    message: "Please enter valid characters"
                                }
                            })}
                        />
                    </div>

                    {/* Right Column */}
                    <div>
                        <TextField
                            fullWidth
                            id="filled-basic"
                            label="Last Name"
                            variant="filled"
                            error={!!errors.LastName}
                            helperText={errors.LastName?.message}
                            {...register("LastName", {
                                required: "Last name is required",
                                pattern: {
                                    value: /^[A-Za-z]+$/,
                                    message: "Please enter valid characters"
                                }
                            })}
                        />
                    </div>

                    <div>
                        <TextField
                            fullWidth
                            id="filled-basic"
                            label="Email"
                            variant="filled"
                            error={!!errors.Email}
                            helperText={errors.Email?.message}
                            {...register("Email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })}
                        />
                    </div>

                    <div>
                        <TextField
                            fullWidth
                            id="filled-basic"
                            label="Contact Number"
                            variant="filled"
                            error={!!errors.ContactNumber}
                            helperText={errors.ContactNumber?.message}
                            {...register("ContactNumber", {
                                required: "Contact number is required",
                                pattern: {
                                    value: /^\d{10}$/,
                                    message: "Please enter a valid 10-digit number"
                                }
                            })}
                        />
                    </div>

                    <div className="md:col-span-2">
                        <TextField
                            fullWidth
                            id="filled-basic"
                            label="Address 1"
                            variant="filled"
                            error={!!errors.Address1}
                            helperText={errors.Address1?.message}
                            {...register("Address1", {
                                required: "Address is required",
                                minLength: {
                                    value: 5,
                                    message: "Address should be at least 5 characters"
                                }
                            })}
                        />
                    </div>

                    <div className="md:col-span-2">
                        <TextField
                            fullWidth
                            id="filled-basic"
                            label="Address 2"
                            variant="filled"
                            error={!!errors.Address2}
                            helperText={errors.Address2?.message}
                            {...register("Address2", {
                                required: "Address is required",
                                minLength: {
                                    value: 5,
                                    message: "Address should be at least 5 characters"
                                }
                            })}
                        />
                    </div>

                    <div>
                        <Controller
                            name="age"
                            control={control}
                            rules={{ required: "Age is required" }}
                            render={({ field }) => (
                                <FormControl fullWidth error={!!errors.age}>
                                    <InputLabel id="age-label">Age</InputLabel>
                                    <Select
                                        labelId="age-label"
                                        label="Age"
                                        variant="filled"
                                        {...field}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                    {errors.age && (
                                        <span className="text-red-500 text-sm mt-1">{errors.age.message}</span>
                                    )}
                                </FormControl>
                            )}
                        />
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    <Button 
                        variant="contained" 
                        type="submit"
                        size="large"
                        className="px-8"
                    >
                        Submit
                    </Button>
                </div>
            </form>

    )
}

export default ProfileForm;