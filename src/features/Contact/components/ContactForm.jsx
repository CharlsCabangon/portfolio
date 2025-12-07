import { useState, useEffect } from 'react';
import clsx from 'clsx';

import { useContactForm } from '../hooks/useContactForm';
import { FormInput, FormTextarea, Alert, Spinner, PrimaryBtn, SecondaryBtn } from '@/components/ui';
import { EMAIL_SUCCESS, EMAIL_ERROR } from '../utils/constants';

export default function ContactForm() {
  const {
    formData,
    errors,
    errorMessage,
    fieldRefs,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    isSending,
    isSuccess,
    isError,
  } = useContactForm();

  const [showDialog, setShowDialog] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (isSuccess || isError) {
      setShowDialog(true);
      setTimeout(() => {
        setIsDialogOpen(true);
      }, 10);
    }
  }, [isSuccess, isError]);

  const handleClose = () => {
    setIsDialogOpen(false);
    setTimeout(() => {
      setShowDialog(false);
      resetForm();
    }, 300);
  };

  return (
    <>
      <div
        className={clsx(
          'md:px-2xl container',
          'bg-background border-background-tertiary/70',
          'ring-ring rounded-md border-10 shadow-lg ring'
        )}
      >
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="space-y-4">
            <div className="space-y-4">
              <FormInput
                label="name"
                name="name"
                value={formData.name}
                error={errors.name}
                disabled={isSending}
                required={true}
                inputRef={fieldRefs.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <FormInput
                label="email"
                name="email"
                value={formData.email}
                error={errors.email}
                disabled={isSending}
                required={true}
                inputRef={fieldRefs.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <FormTextarea
                label="message"
                name="message"
                value={formData.message}
                error={errors.message}
                disabled={isSending}
                required={true}
                inputRef={fieldRefs.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div className="gap-xs flex justify-center sm:justify-end">
            <SecondaryBtn onClick={resetForm} disabled={isSending} className="hidden sm:block">
              clear all
            </SecondaryBtn>
            <PrimaryBtn
              type="submit"
              disabled={isSending}
              className={clsx(isSending && 'cursor-not-allowed opacity-50')}
              aria-busy={isSending}
            >
              {isSending ? (
                <span className="flex items-center justify-center gap-2">
                  <Spinner size="md" />
                  <span>sending...</span>
                </span>
              ) : (
                'send message'
              )}
            </PrimaryBtn>
          </div>
        </form>
      </div>

      {showDialog && (
        <Alert
          isOpen={isDialogOpen}
          onClose={handleClose}
          variant={isSuccess ? 'success' : 'error'}
          title={isSuccess ? EMAIL_SUCCESS.title : EMAIL_ERROR.title}
          message={isSuccess ? EMAIL_SUCCESS.message : errorMessage || EMAIL_ERROR.fallback}
        />
      )}
    </>
  );
}
